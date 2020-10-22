package reporter

import (
	"net/http"
	"time"
)

// Noop represents a reporter doing nothing
type Noop struct{}

// NewNoop create a new reporter that does nothing
func NewNoop() Reporter {
	return &Noop{}
}

// we make sure the struct implements the interface
var _ Reporter = (*Noop)(nil)

// Flush waits until the underlying Transport sends any buffered
// events to the server, blocking for at most the given timeout.
func (r *Noop) Flush(timeout time.Duration) {}

// ReportError sends a global error to sentry
func (r *Noop) ReportError(err error) {}

// ReportMessage sends a global message to sentry
func (r *Noop) ReportMessage(msg string) {}

// NewScope returns a scope used to report a specific error
// with specific data
func (r *Noop) NewScope() Scope {
	return &NoopScope{}
}

// NoopScope represents a scope that does nothing
type NoopScope struct{}

// SetRequest sets the HTTP Requests
func (s *NoopScope) SetRequest(req *http.Request) {}

// SetTag sets the value of a tag
func (s *NoopScope) SetTag(key, value string) {}

// SetTags sets a bunch of tags at once
func (s *NoopScope) SetTags(tags map[string]string) {}

// RemoveTag removes a specific tag
func (s *NoopScope) RemoveTag(key string) {}

// SetContext sets a context
func (s *NoopScope) SetContext(key string, value interface{}) {}

// SetContexts sets a bunch of context at once
func (s *NoopScope) SetContexts(contexts map[string]interface{}) {}

// RemoveContext removes a specific context
func (s *NoopScope) RemoveContext(key string) {}

// SetUser sets the user
func (s *NoopScope) SetUser(u User) {}

// ReportError sends an error to sentry with all the tags,
// contexts, and user
func (s *NoopScope) ReportError(err error) {}

// ReportMessage sends a message to sentry with all the tags,
// contexts, and user
func (s *NoopScope) ReportMessage(msg string) {}
