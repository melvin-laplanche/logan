package handlers_test

import (
	"github.com/melvin-laplanche/logan/api/core"
	"encoding/json"
	"github.com/melvin-laplanche/logan/api/service/health/handlers"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"net/http"
	"github.com/melvin-laplanche/logan/api/cmd/api/router"
	"net/http/httptest"
	"testing"
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