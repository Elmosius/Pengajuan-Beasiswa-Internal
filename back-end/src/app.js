require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");

const fakultasRoutes = require("./routes/fakultasRoutes");
const prodiRoutes = require("./routes/prodiRoutes");
const beasiswaRoutes = require("./routes/beasiswaRoutes");
const pendaftaranRoutes = require("./routes/pendaftaranRoutes");
const corsMiddleware = require("./middlewares/corsMiddleware");

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
