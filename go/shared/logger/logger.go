// Package logger contains interfaces and implementations to log data
package logger

// Logger is an interface used to persist logs
type Logger interface {
	// Debug logs a debug-level message using fmt.Sprint formatting
	// Debug logs are not displayed on production
	Debug(args ...interface{})

	// Debugw logs a debug-level message with the provided context
	// Debug logs are not displayed on production
	Debugw(msg string, keysAndValues ...interface{})

	// Info logs an info-level message using fmt.Sprint formatting
	// Info logs may be helpful, but aren't essential,
	// for troubleshooting
	Info(args ...interface{})

	// Infow logs an info-level message with the provided context
	// Info logs may be helpful, but aren't essential,
	// for troubleshooting
	Infow(msg string, keysAndValues ...interface{})

	// Warn logs a warning using fmt.Sprint formatting
	Warn(args ...interface{})

	// Warnw logs a warning with the provided context
	Warnw(msg string, keysAndValues ...interface{})

	// Error logs an error using fmt.Sprint formatting
	Error(args ...interface{})

	// Errorw logs an error with the provided context
	Errorw(msg string, keysAndValues ...interface{})

	// Named returns a named logger
	Named(name string) Logger

	// Flush makes sure all the logs have been persisted
	// Flush must be called before terminating the application
	Flush() error
}
