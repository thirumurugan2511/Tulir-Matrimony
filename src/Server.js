const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require("cors");

const app = express();

app.use(
    cors({
        orgin: "http://localhost:3000",
        methods: ["GET", "POST"],
    })
);

app.listen(5000, () => {
  console.log('Proxy server is running on port 5000');
});
