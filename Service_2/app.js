require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from service 2", status: 200 });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
