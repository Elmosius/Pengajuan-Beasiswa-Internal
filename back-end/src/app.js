require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const fakultasRoutes = require("./routes/fakultasRoutes");
const app = express();

app.use(express.json());

// fakultas
app.use("/datas/fakultas", fakultasRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
