const NotFound = (req, res, next) => {
  return res.status(404).json({
    statusCode: res.statusCode,
    error: {
      type: "NotFound",
      message: "not found" + req.url,
    },
  });
};

const ErrorHandler = (err, req, res, next) => {
  return res.json({
    statusCode: err.status || 500,
    error: {
      message: err.message || "InternalServerError",
    },
  });
};

module.exports = {
    NotFound,
    ErrorHandler
}