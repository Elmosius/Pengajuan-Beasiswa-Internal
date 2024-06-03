require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const fakultasRoutes = require("./routes/fakultasRoutes");
const app = express();

app.use(express.json());

// middlwares
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});

// fakultas
app.use("/data/fakultas", fakultasRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});