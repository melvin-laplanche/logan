FROM golang:latest

# Copy the local package files to the container’s workspace.
COPY api /app/api
COPY shared /app/shared
COPY go.mod /app/go.mod
COPY go.sum /app/go.sum
COPY Taskfile.yml /app/Taskfile.yml

# Install the deps
RUN curl -sL https://taskfile.dev/install.sh | sh

# build the apps
RUN cd /app && task build

# Set binary as entrypoint
CMD /app/bin/api

EXPOSE 5000