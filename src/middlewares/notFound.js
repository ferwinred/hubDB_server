const error = (req, res, next) => {
  res
    .status(400)
    .json({ msg: "sorry but this endpoint doesn't exist, please try again!" });
};

module.exports = error;
