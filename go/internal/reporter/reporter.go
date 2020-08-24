package reporter

import (
	"net/http"
	"time"
)

// Reporter represents an interface used to report errors
type Reporter interface {
	// NewScope returns a scope used to report a specific error
	// with specific data
	NewScope() Scope

	// Flush waits until the underlying Transport sends any buffered
	// events to the server, blocking for at most the given timeout.
	Flush(timeout time.Duration)

	// ReportError sends a global error to sentry
	ReportError(err error)

	// ReportMessage sends a global message to sentry
	ReportMessage(msg string)
}

// Scope describes a struct used to report errors
type Scope interface {
	// SetRequest sets the HTTP Requests
	SetRequest(*http.Request)

	// SetTag sets the value of a tag
	SetTag(key, value string)
	// SetTags sets a bunch of tags at once
	SetTags(tags map[string]string)
	// RemoveTag removes a specific tag
	RemoveTag(key string)

	// SetContext sets a context
	SetContext(key string, value interface{})
	// SetContexts sets a bunch of context at once
	SetContexts(contexts map[string]interface{})
	// RemoveContext removes a specific context
	RemoveContext(key string)

	// SetUser sets the user
	SetUser(u User)

	// ReportError sends an error to sentry with all the tags,
	// contexts, and user
	ReportError(err error)
	// ReportMessage sends a message to sentry with all the tags,
	// contexts, and user
	ReportMessage(msg string)
}

// User represents the userdata to be attached to a report
type User struct {
	ID string
}
