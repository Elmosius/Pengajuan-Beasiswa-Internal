require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");

const userRoutes = require("./routes/userRoutes");
const fakultasRoutes = require("./routes/fakultasRoutes");
const prodiRoutes = require("./routes/prodiRoutes");
const beasiswaRoutes = require("./routes/beasiswaRoutes");
const beasiswaDetailRoutes = require("./routes/beasiswaDetailRoutes");
const pendaftaranRoutes = require("./routes/pendaftaranRoutes");
const roleRoutes = require("./routes/roleRoutes");
const authRoutes = require("./routes/authRoutes");

const corsMiddleware = require("./middlewares/corsMiddleware");

const app = express();

app.use(express.json());

// CORS middlwares
app.use(corsMiddleware);

// Beasiswa Detail
app.use("/beasiswa/details", beasiswaDetailRoutes);

// login
app.use("/auth", authRoutes);

// user
app.use("/data/users", userRoutes);

// fakultas
app.use("/data/fakultas", fakultasRoutes);

// prodi
app.use("/data/program-studi", prodiRoutes);

// pendaftaran
app.use("/beasiswa/pendaftaran", pendaftaranRoutes);

// beasiswa
app.use("/beasiswa", beasiswaRoutes);

// role
app.use("/roles", roleRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
