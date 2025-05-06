const multer = require("multer");
const fs = require("fs");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdirSync("uploads", { recursive: true });
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const whiteListFormat = [".png", ".jpg", "jpeg", "webp"];
    if (whiteListFormat.includes(ext)) {
      const fileName = Date.now() + ext;
      cb(null, fileName);
    } else {
      cb(new Error("only .png, .jpg, jpeg, .webp"));
    }
  },
});

const uploadFile = multer({
    storage
})
module.exports = {
    uploadFile
}