# Build stage for Rust tools
FROM rust:1.84-alpine AS rust-builder

# Install build dependencies
RUN apk add --no-cache \
    build-base \
    musl-dev \
    gcc

# Install mdbook and preprocessors
RUN cargo install mdbook mdbook-alerts mdbook-d2

# Get D2
FROM terrastruct/d2:latest AS d2-env

###############
# Final stage #
###############
FROM alpine:latest

# Install runtime dependencies
RUN apk add --no-cache \
    libgcc \
    libstdc++

COPY --from=rust-builder /usr/local/cargo/bin/mdbook /usr/local/bin/mdbook
COPY --from=rust-builder /usr/local/cargo/bin/mdbook-alerts /usr/local/bin/mdbook-alerts
COPY --from=rust-builder /usr/local/cargo/bin/mdbook-d2 /usr/local/bin/mdbook-d2

COPY --from=d2-env /usr/local/bin/d2 /usr/local/bin/d2
COPY --from=d2-env /usr/local/lib/d2 /usr/local/lib/d2

WORKDIR /apps/docs

EXPOSE 80

CMD ["mdbook","serve", "-p", "80", "-n", "0.0.0.0"]
