const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("File destination called");
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    console.log("File name called", file.originalname);
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  console.log("File filter called", file.mimetype);
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("File harus dalam format PDF"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
