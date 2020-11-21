module github.com/melvin-laplanche/logan

go 1.15

require (
	github.com/getsentry/sentry-go v0.8.0
	github.com/google/uuid v1.1.2
	github.com/kelseyhightower/envconfig v1.4.0
	github.com/labstack/echo v3.3.10+incompatible
	github.com/mattn/go-colorable v0.1.8 // indirect
	github.com/stretchr/testify v1.6.1
	github.com/valyala/fasttemplate v1.2.1 // indirect
	go.uber.org/multierr v1.6.0 // indirect
	go.uber.org/zap v1.16.0
	golang.org/x/crypto v0.0.0-20201117144127-c1f2f97bffc9 // indirect
	golang.org/x/net v0.0.0-20201110031124-69a78807bb2b // indirect
	golang.org/x/sys v0.0.0-20201119102817-f84b799fce68 // indirect
	golang.org/x/text v0.3.4 // indirect
	gopkg.in/yaml.v3 v3.0.0-20200615113413-eeeca48fe776 // indirect
)

// Fix for CWE-190
// Affected package: github.com/gorilla/websocket@1.4.0 (super deeply nested)
// Root package: github.com/getsentry/sentry-go
// We're not affected because this vulnerability is for Sentry integration
// in the Iris web framework
// Fix: Force version 1.4.2
replace github.com/gorilla/websocket v1.4.0 => github.com/gorilla/websocket v1.4.2
