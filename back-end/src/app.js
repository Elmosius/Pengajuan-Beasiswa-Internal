require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");

const fakultasRoutes = require("./routes/fakultasRoutes");
const prodiRoutes = require("./routes/prodiRoutes");
const corsMiddleware = require("./middlewares/validateMiddleware");

const app = express();

app.use(express.json());

// fakultas
app.use("/data/fakultas", fakultasRoutes);

// prodi
app.use("/data/program-studi", prodiRoutes);

// pendaftaran
app.use("/beasiswa/pendaftaran", pendaftaranRoutes);

// beasiswa
app.use("/beasiswa", beasiswaRoutes);

// CORS middlwares
app.use(corsMiddleware);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
