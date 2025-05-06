const express = require("express");
const { NotFound, ErrorHandler } = require("./utils/errorhandlers");
const { RegisterValidator } = require("./validator/auth.validator");

const { checkValidation } = require("./middleware/validator");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/register", RegisterValidator(), checkValidation, (req, res) => {
  
  res.send(req.body);
});

app.use(ErrorHandler);
app.use(NotFound);
app.listen(3000, () => {
  console.log("server run on port : localhost:3000");
});
