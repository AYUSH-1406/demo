const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// In-memory data (one-tier)
const appData = {
  name: "One Tier DevOps App",
  version: "1.0",
  environment: "local"
};

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Application is running successfully 🚀",
    app: appData
  });
});

// Health check (VERY IMPORTANT for CI/CD, ECS, ALB later)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date()
  });
});

// Info endpoint
app.get("/info", (req, res) => {
  res.json(appData);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
