const express = require("express");
const { uploadFile } = require("./middleware/multer");
const { NotFound, ErrorHandler } = require("./utils/errorhandlers");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.post("/upload", uploadFile.array("image", 3), async(req, res) => {
  await res.send(req.files);
});
app.use(NotFound);
app.use(ErrorHandler);
app.listen(port, () => console.log(`server run on port ${port}!`));
