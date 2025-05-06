const express = require("express");
const { NotFound, ErrorHandler } = require("./utils/errorhandlers");

const { loginValidationSchema } = require("./validation/auth.validator");
const { message } = require("statuses");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/login", async (req, res, next) => {
  try {
    await loginValidationSchema.validateAsync(req.body);
    res.status(200).json({message: "The Operation SuccessFully"})
  } catch (error) {
    next(error);
  }
});

app.use(ErrorHandler);
app.use(NotFound);
app.listen(3000, () => {
  console.log("server run on port : localhost:3000");
});
