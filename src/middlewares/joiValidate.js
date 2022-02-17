const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  lastname: Joi.string().min(3).max(30).required(),
  document: Joi.string().required()
});

const validate = async (req, res, next) => {
  try {
      const row = req.body;
      await schema.validateAsync(row);
        next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
    validate
}