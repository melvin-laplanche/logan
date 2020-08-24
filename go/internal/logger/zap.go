package logger

import (
	"go.uber.org/zap"
)

// Zap is a logger that uses zap internally
type Zap struct {
	suggar *zap.SugaredLogger
}

// NewZap returns a logger instance using Zap
func NewZap() (Logger, error) {
	logger, err := zap.NewProduction()
	if err != nil {
		return nil, err
	}
	return &Zap{
		suggar: logger.Sugar(),
	}, nil
}

// Debug logs a debug-level message using fmt.Sprint formatting
// Debug logs are not displayed on production
func (l *Zap) Debug(args ...interface{}) {
	l.suggar.Debug(args...)
}

// Debugw logs a debug-level message with the provided context
// Debug logs are not displayed on production
func (l *Zap) Debugw(msg string, keysAndValues ...interface{}) {
	l.suggar.Debugw(msg, keysAndValues...)
}

// Info logs an info-level message using fmt.Sprint formatting
// Info logs may be helpful, but aren't essential,
// for troubleshooting
func (l *Zap) Info(args ...interface{}) {
	l.suggar.Info(args...)
}

// Infow logs an info-level message with the provided context
// Info logs may be helpful, but aren't essential,
// for troubleshooting
func (l *Zap) Infow(msg string, keysAndValues ...interface{}) {
	l.suggar.Infow(msg, keysAndValues...)
}

// Warn logs a warning using fmt.Sprint formatting
func (l *Zap) Warn(args ...interface{}) {
	l.suggar.Warn(args...)
}

// Warnw logs a warning with the provided context
func (l *Zap) Warnw(msg string, keysAndValues ...interface{}) {
	l.suggar.Warnw(msg, keysAndValues...)
}

// Error logs an error using fmt.Sprint formatting
func (l *Zap) Error(args ...interface{}) {
	l.suggar.Error(args...)
}

// Errorw logs an error with the provided context
func (l *Zap) Errorw(msg string, keysAndValues ...interface{}) {
	l.suggar.Warnw(msg, keysAndValues...)
}

// Named returns a named logger
func (l *Zap) Named(name string) Logger {
	return &Zap{
		suggar: l.suggar.Named(name),
	}
}

// Flush makes sure all the logs have been persisted
// Flush must be called before terminating the application
func (l *Zap) Flush() error {
	return l.suggar.Sync()
}
