# Local Development Environment Setup

## Overview

The local development environment consists of several services:

- PostgreSQL with pgvector extension
- CSV data importer
- Mailhog for email testing
- Redis for caching/queue
- Monitoring stack (Grafana, Loki, Prometheus, Tempo, Alloy)

## Prerequisites

- Docker and Docker Compose
- Node.js/PNPM (for running the application)
- .env file with required variables

## Environment Variables

Required environment variables are to be found in the `.env.example` file.

## Services

### PostgreSQL (postgres-nutri)

- Uses `pgvector/pgvector:pg16` image for vector similarity search support
- Exposed on port defined by `DATABASE_PORT` (default: 3100)
- Includes health check
- Persistent data stored in `pgdata-postgres-nutri` volume
- Custom initialization scripts in `./deploy/docker-compose/postgres-nutri`

### CSV Data Importer (csvkit-importer)

- Custom service for importing initial data
- Built from local Dockerfile (`./deploy/docker-compose/csvkit-importer/Dockerfile.csvkit`)
- Depends on PostgreSQL service
- Mounts local directories:
  - `/data`: CSV data files
  - `/config`: Configuration files
  - `import_script.py`: Import script

### Mailhog

- Local SMTP testing server
- Web UI available at `http://localhost:8025`
- SMTP server on port 1025

### Redis

- Uses `bitnami/redis` image
- Password protected
- Exposed on port defined by `REDIS_PORT` (default: 3200)
- Persistent data stored in `redis-nutri` volume

### Monitoring Stack

#### Grafana

- Version: 11.2.0
- Web UI available at `http://localhost:3000`
- Anonymous access enabled (Admin role)
- Configured with Loki explore app
- Custom provisioning from `./deploy/docker-compose/grafana`

#### Loki (Log Aggregation)

- Version: 3.3.2
- Exposed on port 3100
- Custom configuration via `./deploy/docker-compose/loki/loki-config.yaml`
- Configured with cluster depth and similarity threshold

#### Alloy (Metrics Processing)

- Latest version
- Running in flow mode
- Server HTTP port: 12345
- Additional port: 12347
- Custom configuration via `./deploy/docker-compose/alloy/config.river`

#### Tempo (Tracing)

- Version: 2.6.0
- Ports:
  - 14268: Jaeger ingest
  - 3200: Tempo
  - 4317: OTLP gRPC
  - 4318: OTLP HTTP
- Custom configuration via `./deploy/docker-compose/tempo/tempo.yaml`

#### Prometheus (Metrics)

- Latest version
- Web UI available at `http://localhost:9090`
- Features enabled:
  - Remote write receiver
  - Exemplar storage
  - Native histograms
- Custom configuration from `./deploy/docker-compose/prometheus`
- Persistent data stored in `prom_data` volume

## Volumes

- `pgdata-postgres-nutri`: PostgreSQL data
- `redis-nutri`: Redis data
- `grafana_data`: Grafana configuration and data
- `prom_data`: Prometheus data

## Usage

### Basic Commands

Start all services:

```bash
docker-compose up -d
```

Full database reset with data import:

```bash
pnpm db:nutri:reset:full
```

Quick database reset (without data import):

```bash
pnpm db:nutri:reset
```

Database migration:

```bash
pnpm db:nutri:migrate
```

Generate Prisma client:

```bash
pnpm db:nutri:client
```

Database dump:

```bash
pnpm db:nutri:dump
```

Database TUI access:

```bash
pnpm db:nutri:tui
```

### Docker Commands

Build server image:

```bash
pnpm docker:server:build
```

Run server container:

```bash
pnpm docker:server:run
```

## Data Import Process

1. PostgreSQL service starts
2. Health check confirms database is ready
3. csvkit-importer service runs import script
4. Additional data imports can be run via:
   ```bash
   pnpm data:import:usda
   pnpm data:import:otto
   pnpm data:import:canada
   ```

## Volumes

- `pgdata-postgres-nutri`: PostgreSQL data
- `redis-nutri`: Redis data

## Integration with Kubernetes Setup

When running the application in k3d/k3s, the services can be accessed via:

- PostgreSQL: `host.docker.internal:3100`
- Redis: `host.docker.internal:3200`
- Mailhog SMTP: `host.docker.internal:1025`
- Mailhog UI: `host.docker.internal:8025`

## Development Notes

### Database

- Uses pgvector extension for vector similarity search
- Custom WAL segment size (512MB)
- Includes health check configuration
- Initialization scripts in separate directory

### Data Import

- Separate container for data import
- Waits for database to be healthy
- Multiple data sources (USDA, Otto, Canada)
- Python-based import script

### Email Testing

- Mailhog provides local SMTP server
- Web interface for viewing sent emails
- Useful for testing email notifications

### Caching/Queue

- Redis used for caching and queue management
- Password protected
- Persistent volume for data storage

### Monitoring Stack
- Complete observability solution with:
  - Metrics (Prometheus)
  - Logs (Loki)
  - Traces (Tempo)
- Grafana as unified visualization platform
- Alloy for metrics processing and forwarding
- All components configured for local development

## TODO List

### Monitoring
- [x] Add database monitoring
- [x] Add Redis monitoring
- [x] Implement logging solution
- [ ] Set up custom dashboards
- [ ] Configure alerts
- [ ] Add application metrics

## Common Issues and Solutions

### Database Connection Issues

- Check if PostgreSQL container is healthy
- Verify port mappings
- Check credentials in .env file

### Data Import Failures

- Check CSV file formats
- Verify database connection from importer
- Check import logs in container

### Redis Connection Issues

- Verify Redis password
- Check port availability
- Verify container logs

## Additional Resources

- [pgvector Documentation](https://github.com/pgvector/pgvector)
- [Mailhog Documentation](https://github.com/mailhog/MailHog)
- [Bitnami Redis Documentation](https://github.com/bitnami/containers/tree/main/bitnami/redis)
- [Grafana Documentation](https://grafana.com/docs/)
- [Loki Documentation](https://grafana.com/docs/loki/latest/)
- [Prometheus Documentation](https://prometheus.io/docs/)
- [Tempo Documentation](https://grafana.com/docs/tempo/latest/)
