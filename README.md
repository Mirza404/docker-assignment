# Docker Assignment: Node.js Backend & Flask Frontend

## Overview

This assignment involves setting up two basic applications in Docker containers:

- A **Node.js backend** that runs on port 3000.
- A **Flask frontend** that runs on port 5000.

Each application is containerized using Docker, and Dockerfiles are created to automate the build and run processes.

---

## Prerequisites

Before proceeding, ensure you have the following installed:

- **Docker**: For containerization and running the images.
- **Node.js** and **npm**: For setting up the Node.js backend.
- **Python** and **pip**: For setting up the Flask frontend.

---

## Node.js Backend

### Running the Backend

1. Clone the repository.
2. Navigate to the **backend** directory and build the Docker image:

   ```bash
   docker build -t node-backend .
   ```

3. Run the container:

   ```bash
   docker run -p 3000:3000 node-backend
   ```

   This will start the Node.js backend and expose it on port 3000.

---

## Flask Frontend

### Running the Frontend

1. Clone the repository.
2. Navigate to the **frontend** directory and build the Docker image:

   ```bash
   docker build -t flask-frontend .
   ```

3. Run the container:

   ```bash
   docker run -p 5000:5000 flask-frontend
   ```

   This will start the Flask frontend and expose it on port 5000.

---

## Testing the Containers

After running the containers, you can verify that both the backend and frontend are running correctly by visiting the following URLs in your browser:

- **Node.js Backend**: [http://localhost:3000](http://localhost:3000)
- **Flask Frontend**: [http://localhost:5000](http://localhost:5000)

Alternatively, you can verify the running containers using the `docker ps` command:

```bash
docker ps
```

### Proof of running containers via docker ps and docker run
![alt text](<Screenshot from 2025-05-04 15-15-43.png>)
