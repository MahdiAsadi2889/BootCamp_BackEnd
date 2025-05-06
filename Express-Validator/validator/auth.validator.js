const { body } = require("express-validator");
const RegisterValidator = () => [
  body("name").isLength({ min: 3, max: 20 }).withMessage("Password must be between 8 and 20 characters"),
  body("email").isEmail().withMessage("Invalid email address"),
  body("password").isLength({ min: 6, max: 20 }).withMessage("Password must be between 8 and 20 characters")
];

 
module.exports = {
  RegisterValidator,
};
