```markdown
# 🚀 Dockerized Express.js API

This repository contains a simple Express.js application that is fully Dockerized. It provides a basic API that returns a **"Hello, World!"** message.

---

## 📌 Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

---

## 📂 Project Structure

```
/my-express-app
│── index.js          # Express.js API
│── package.json      # Node.js Dependencies
│── package-lock.json # Lock File
│── Dockerfile        # Docker Configuration
│── .dockerignore     # Excluded Files for Docker
│── README.md         # Documentation
```

---

## 🛠 Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/my-express-app.git
cd my-express-app
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run Locally (Without Docker)

```sh
node index.js
```

Now, visit [http://localhost:3000/](http://localhost:3000/) in your browser.

---

## 🐳 Docker Setup

### 🔹 1. Create a Dockerfile

Create a `Dockerfile` in the project directory with the following content:

```dockerfile
# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
```

### 🔹 2. Create a `.dockerignore` File

Create a `.dockerignore` file to exclude unnecessary files from the Docker build:

```lua
node_modules
npm-debug.log
.DS_Store
.env
```

### 🔹 3. Build the Docker Image

Run the following command to build the Docker image:

```sh
docker build -t my-express-app .
```

### 🔹 4. Run the Docker Container

Run the container and expose it on port 3000:

```sh
docker run -p 3000:3000 my-express-app
```

Now your Express app should be running at [http://localhost:3000/](http://localhost:3000/).

### 🔹 5. Run in Detached Mode (Optional)

Run the container in the background:

```sh
docker run -d -p 3000:3000 --name my-app-container my-express-app
```

### 🔹 6. Stop & Remove the Container

```sh
docker stop my-app-container
docker rm my-app-container
```

---

## 📜 Express.js Application Code (`index.js`)

Create a file named `index.js` and add the following code:

```javascript
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## 📄 API Endpoints

| Method | Endpoint | Description                     |
|--------|----------|---------------------------------|
| GET    | `/`      | Returns a "Hello, World!" message |

---

## 🔥 Docker Commands Cheat Sheet

| Command                                      | Description                          |
|----------------------------------------------|--------------------------------------|
| `docker build -t my-express-app .`           | Build the Docker image               |
| `docker run -p 3000:3000 my-express-app`     | Run the container                    |
| `docker run -d -p 3000:3000 --name my-app-container my-express-app` | Run in detached mode |
| `docker ps`                                  | List running containers              |
| `docker stop my-app-container`               | Stop the container                   |
| `docker rm my-app-container`                 | Remove the container                 |

---

## 📜 License

This project is licensed under the MIT License.

---
