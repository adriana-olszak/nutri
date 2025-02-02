# Kubernetes Local Development Setup

## Current Setup
The project currently runs in a local Kubernetes (k3d) cluster with:
- Node.js API running in the cluster
- PostgreSQL and Redis running locally via docker-compose
- Basic Kubernetes resources (deployment, service, ingress)

### Prerequisites
- Docker
- k3d
- kubectl
- helm

### Local Development Setup

1. **Create k3d cluster**
```bash
k3d cluster create staging-cluster \
  --api-port 6443 \
  --port "80:80@loadbalancer" \
  --port "443:443@loadbalancer"
```

2. **Build and Import Docker Image**
```bash
# Build the image
docker build -t server:latest -f deploy/dockerfiles/server/Dockerfile .

# Import into k3d cluster
k3d image import server:latest -c staging-cluster
```

3. **Deploy the Application**
```bash
# Create namespace
kubectl create namespace staging

# Apply Kubernetes configurations
kubectl apply -k deploy/clusters/staging

# Verify deployment
kubectl get pods -n staging
kubectl get services -n staging
kubectl get ingress -n staging
```

4. **Access the Application**
- API is available at: http://api.staging.localhost
- Application connects to local PostgreSQL at host.docker.internal:5432
- Application connects to local Redis at host.docker.internal:6379

## Project Structure
```
deploy/
├── base/
│   └── server/
│       ├── deployment.yaml
│       ├── service.yaml
│       ├── ingress.yaml
│       └── kustomization.yaml
└── clusters/
    └── staging/
        ├── kustomization.yaml
        └── namespace.yaml
```

## Known Issues and TODOs

### Docker Image Optimization
The current Docker image is not production-ready and needs optimization:
- Large image size (over 2GB)
- Contains development dependencies
- No proper layer caching
- No secuirty measures

TODO: Optimize Docker image:
- Implement proper multi-stage builds
- Remove development dependencies
- Optimize layer caching
- Implement proper PNPM caching
- Reduce the image size

### Security Considerations
Currently, "sensitive" data is stored in environment variables within the deployment configuration. This is not a problem for local development but should not be done in production.

TODO: Implement Sealed Secrets:
1. Install Sealed Secrets Controller:
```bash
helm repo add sealed-secrets https://bitnami-labs.github.io/sealed-secrets
helm repo update
helm install sealed-secrets sealed-secrets/sealed-secrets -n kube-system
```

2. Move sensitive data to Sealed Secrets:
- OAuth credentials
- JWT secrets
- Database credentials

### Monitoring and Observability
Currently no monitoring solution is implemented.

TODO: Add monitoring stack:
- Prometheus for metrics
- Grafana for visualization
- Loki for logs

### Health Checks
No health checks implemented in the deployment.

TODO: Add health checks:
```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 4100
readinessProbe:
  httpGet:
    path: /health
    port: 4100
```

### Resource Management
No resource limits defined.

TODO: Add resource limits:
```yaml
resources:
  limits:
    memory: "512Mi"
    cpu: "500m"
  requests:
    memory: "256Mi"
    cpu: "250m"
```

### GitOps Considerations
Currently manual deployments.

TODO: Consider implementing:
- ArgoCD for GitOps
- Automated deployments
- Better environment management

## Future Enhancements

### Production Setup
When moving to production, consider:
1. Proper secrets management with Sealed Secrets
2. Production-grade monitoring
3. Proper resource allocation
4. High availability setup
5. Backup strategy
6. SSL/TLS configuration
7. Network policies
8. Service mesh (if needed)

### Development Workflow
Potential improvements:
1. Better local development experience
2. Automated testing in Kubernetes
3. CI/CD pipeline setup
4. Development/Production parity

## Notes
- Current setup is for local development only
- Security measures are minimal
- Environment variables are not properly secured
- No SSL/TLS configuration
- No monitoring or logging solution
- No automated deployments

## Useful Commands

### Kubernetes
```bash
# Get pods
kubectl get pods -n staging

# Check logs
kubectl logs -n staging deployment/server

# Describe resources
kubectl describe pod -n staging -l app=server

# Port forward (if needed)
kubectl port-forward -n staging service/server 4100:80
```

### Docker
```bash
# Rebuild image
docker build -t server:latest -f deploy/dockerfiles/server/Dockerfile .

# Import to k3d
k3d image import server:latest -c staging-cluster
```

## References
- [k3d Documentation](https://k3d.io/)
- [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets)
- [Kustomize](https://kustomize.io/)
