const error = (err, req, res, next) => {
  err.message === "HTTP request failed"
    ? res.status(500).json(err.res.body)
    : res.status(400).json(err);
};

module.exports = error;
