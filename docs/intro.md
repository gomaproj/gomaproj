---
sidebar_position: 1
---

# Goma Gateway

Goma Gateway is a lightweight High-Performance Declarative API Gateway Management.



## Features

It's designed to be straightforward and efficient, offering a rich set of features, including:

### Core Features
- **RESTful API Gateway Management**  
  Simplify the management of your API Gateway with powerful tools.

- **Domain/Host-Based Request Routing**  
  Route requests based on specific domains or hosts.

- **Multi-Domain Request Routing**  
  Handle requests across multiple domains seamlessly.

- **Reverse Proxy**  
  Efficiently forward client requests to backend servers.

- **WebSocket Proxy**  
  Enable real-time communication via WebSocket support.

### Security and Control
- **Cross-Origin Resource Sharing (CORS)**  
  Define and manage cross-origin policies for secure interactions.

- **Custom Headers**  
  Add and modify headers to meet specific requirements.

- **Backend Errors Interceptor**  
  Catch and handle backend errors effectively.

- **Block Common Exploits Middleware**
  - Detect patterns indicating SQL injection attempts.
  - Identify basic cross-site scripting (XSS) attempts.

- **Authentication Middleware**
  - Support for **JWT** with client authorization based on request results.
  - **Basic-Auth** and **OAuth** authentication mechanisms.

### Monitoring and Performance
- **Logging**  
  Comprehensive request and response logging.

- **Metrics**  
  Gather insights and monitor performance metrics.

- **Rate Limiting**
  - **In-Memory Rate Limiting**: Client IP-based request throttling.
  - **Distributed Rate Limiting**: Leverage Redis for scalable, client IP-based rate limits.

- **Load Balancing**  
  Use a round-robin algorithm for efficient load distribution.

### Configuration and Flexibility
- **Support for Multiple Route Configuration Files**  
  Organize routes across multiple `.yml` or `.yaml` files.

- **TLS Support**  
  Ensure secure communication with TLS integration.

- **HTTP Method Restrictions**  
  Limit HTTP methods for specific routes to enhance control.

Declarative API Gateway Management, define your routes and middleware directly in code for seamless configuration.

----
Architecture:


We are open to receiving stars, PRs, and issues!

---

The [jkaninda/goma-gateway](https://hub.docker.com/r/jkaninda/goma-gateway) Docker image can be deployed on Docker, Docker in Swarm mode, and Kubernetes. 


## Available image registries

This Docker image is published to both Docker Hub and the GitHub container registry.
Depending on your preferences and needs, you can reference both `jkaninda/goma-gateway` as well as `ghcr.io/jkaninda/goma-gateway`:

```
docker pull jkaninda/goma-gateway
docker pull ghcr.io/jkaninda/goma-gateway
```

Documentation references Docker Hub, but all examples will work using ghcr.io just as well.


## References

We decided to publish this image as a simpler and more lightweight because of the following requirements:

- The original image is based on `Alpine`, making it heavy.
- This image is written in Go.
- `arm64` and `arm/v7` architectures are supported.
- Docker in Swarm mode is supported.
- Kubernetes is supported.