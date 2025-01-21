# Stage 1: Build
FROM golang:1.23 AS builder

# Set environment variables
ENV CGO_ENABLED=0 GOOS=linux GOARCH=amd64

# Install ca-certificates
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy go.mod and go.sum
COPY go.mod go.sum ./

RUN go mod download

# Copy the entire backend source code
COPY . .

RUN go build -o serve cmd/serve/main.go

# Stage 2: Runtime
FROM scratch

# Set working directory
WORKDIR /app
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/

# Copy the built binary from the builder stage
COPY --from=builder /app/serve .

# Expose the application's port
EXPOSE 8080

ENV GIN_MODE=release

# Run the application
CMD ["./serve"]

