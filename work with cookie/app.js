const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Index Page!");
});
app.get("/set-cookie", (req, res) => {
  res.cookie("user", "student", {
    maxAge: 1000 * 3600 * 24,
  });
  res.send("cookie have been saved successfully");
});

app.get("/get-cookie", (req, res) => {
  const cookies = req.cookies;
  if (!req.cookies.user) {
    return res.send("cookie not found");
  }
  res.send(cookies);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
