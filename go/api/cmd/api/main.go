package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"time"

	"github.com/melvin-laplanche/logan/shared/logger"

	"github.com/melvin-laplanche/logan/shared/reporter"

	"github.com/melvin-laplanche/logan/api/core"
	"github.com/melvin-laplanche/logan/api/service/health"

	"github.com/kelseyhightower/envconfig"
)

type params struct {
	PostgresDSN string `envconfig:"POSTGRES_DSN" required:"true"`
	SentryDSN   string `envconfig:"SENTRY_DSN"`
	Port        string `default:"5000"`
	Debug       bool   `default:"false"`
}

func main() {
	var p params
	err := envconfig.Process("logan", &p)
	if err != nil {
		log.Fatal(err.Error())
	}

	// Setup the logger
	l, err := logger.NewZap()
	if err != nil {
		log.Fatal(err.Error())
	}
	defer func() {
		err = l.Flush()
		fmt.Fprintf(os.Stderr, "could not flush logs: %s", err.Error())
	}()

	// Set the default deps
	deps := &core.Dependencies{
		Reporter: reporter.NewNoop(),
		Logger:   l,
	}

	// Setup sentry as reporter
	if p.SentryDSN != "" {
		deps.Reporter, err = reporter.NewSentry(p.SentryDSN, p.Debug)
		if err != nil {
			l.Error("could not initialize Sentry: %s", err.Error())
			return
		}
	}
	// We make sure all the events have been reported
	defer deps.Reporter.Flush(10 * time.Second)

	e := core.NewEchoConf(deps)
	e.Debug = p.Debug

	health.Register(e.Group("/health"), deps)

	go func() {
		if err = e.Start(":" + p.Port); err != nil {
			deps.Reporter.ReportError(err)
		}
	}()

	// Wait for interrupt signal to shutdown the server
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	<-quit

	// We set a 10 second timeout to shut the server down
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err = e.Shutdown(ctx); err != nil {
		deps.Reporter.ReportError(err)
	}
}
