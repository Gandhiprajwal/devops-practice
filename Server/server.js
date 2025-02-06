require("dotenv").config();

const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Proxy /service1 requests to Microservice 1
app.use(
  "/service1",
  createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true,
    pathRewrite: { "^/service1": "" }, // Removes "/service1" from the request path
  })
);

// Proxy /service2 requests to Microservice 2
app.use(
  "/service2",
  createProxyMiddleware({
    target: "http://localhost:8002",
    changeOrigin: true,
    pathRewrite: { "^/service2": "" }, // Removes "/service2" from the request path
  })
);

// Proxy /service3 requests to Microservice 3
app.use(
  "/service3",
  createProxyMiddleware({
    target: "http://localhost:8003",
    changeOrigin: true,
    pathRewrite: { "^/service3": "" }, // Removes "/service3" from the request path
  })
);

// main server
app.get("/", (req, res) => {
  res.json({ message: "Hello from main server", status: 200 });
});

app.listen(process.env.PORT, () => {
  console.log(`Main server running on ${process.env.PORT}`);
});
