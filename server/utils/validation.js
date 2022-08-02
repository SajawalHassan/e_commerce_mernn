const joi = require("joi");

module.exports.userValidation = (data) => {
  const schema = joi.object({
    username: joi.string().min(3).max(255),
    email: joi.string().min(3).max(255).email(),
    password: joi.string().min(8).max(255),
  });

  return schema.validate(data);
};

module.exports.itemValidation = (data) => {
  const schema = joi.object({
    name: joi.string().min(3).max(255),
    shortDesc: joi.string().min(3).max(100),
    price: joi.number().min(1),
    image: joi.string().min(3),
    quantity: joi.number().min(1),
    category: joi.string().min(3),
  });

  return schema.validate(data);
};
