package handlers_test

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/melvin-laplanche/logan/api/cmd/api/router"
	"github.com/melvin-laplanche/logan/api/core"
	"github.com/melvin-laplanche/logan/api/service/health/handlers"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestCheck(t *testing.T) {
	e := router.NewRouter(&core.Dependencies{})

	req := httptest.NewRequest(http.MethodGet, "/health", nil)
	rec := httptest.NewRecorder()
	e.ServeHTTP(rec, req)
	require.Equal(t, http.StatusOK, rec.Code)

	resp := &handlers.CheckResponse{}
	err := json.NewDecoder(rec.Body).Decode(resp)
	require.NoError(t, err)
	assert.Equal(t, "success", resp.Status)
}
