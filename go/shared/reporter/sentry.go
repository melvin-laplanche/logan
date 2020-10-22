package reporter

import (
	"net/http"
	"time"

	"github.com/getsentry/sentry-go"
)

// Sentry represents a reporter implementing Sentry
type Sentry struct {
}

// NewSentry create a new reporter implementing Sentry
func NewSentry(dsn string, debug bool) (Reporter, error) {
	err := sentry.Init(sentry.ClientOptions{
		Dsn:              dsn,
		Debug:            debug,
		AttachStacktrace: true,
	})
	if err != nil {
		return nil, err
	}
	return &Sentry{}, nil
}

// we make sure the struct implements the interface
var _ Reporter = (*Sentry)(nil)

// Flush waits until the underlying Transport sends any buffered
// events to the server, blocking for at most the given timeout.
func (r *Sentry) Flush(timeout time.Duration) {
	sentry.Flush(timeout)
}

// ReportError sends a global error to sentry
func (r *Sentry) ReportError(err error) {
	sentry.CaptureException(err)
}

// ReportMessage sends a global message to sentry
func (r *Sentry) ReportMessage(msg string) {
	sentry.CaptureMessage(msg)
}

// NewScope returns a scope used to report a specific error
// with specific data
func (r *Sentry) NewScope() Scope {
	return &SentryScope{
		hub: sentry.CurrentHub().Clone(),
	}
}

// SentryScope represents a scope implementing Sentry
type SentryScope struct {
	hub *sentry.Hub
}

// SetRequest sets the HTTP Requests
func (s *SentryScope) SetRequest(req *http.Request) {
	s.hub.Scope().SetRequest(req)
}

// SetTag sets the value of a tag
func (s *SentryScope) SetTag(key, value string) {
	s.hub.Scope().SetTag(key, value)
}

// SetTags sets a bunch of tags at once
func (s *SentryScope) SetTags(tags map[string]string) {
	s.hub.Scope().SetTags(tags)
}

// RemoveTag removes a specific tag
func (s *SentryScope) RemoveTag(key string) {
	s.hub.Scope().RemoveTag(key)
}

// SetContext sets a context
func (s *SentryScope) SetContext(key string, value interface{}) {
	s.hub.Scope().SetContext(key, value)
}

// SetContexts sets a bunch of context at once
func (s *SentryScope) SetContexts(contexts map[string]interface{}) {
	s.hub.Scope().SetContexts(contexts)
}

// RemoveContext removes a specific context
func (s *SentryScope) RemoveContext(key string) {
	s.hub.Scope().RemoveContext(key)
}

// SetUser sets the user
func (s *SentryScope) SetUser(u User) {
	s.hub.Scope().SetUser(sentry.User{
		ID: u.ID,
	})
}

// ReportError sends an error to sentry with all the tags,
// contexts, and user
func (s *SentryScope) ReportError(err error) {
	s.hub.CaptureException(err)
}

// ReportMessage sends a message to sentry with all the tags,
// contexts, and user
func (s *SentryScope) ReportMessage(msg string) {
	s.hub.CaptureMessage(msg)
}
