const Ajv = require("ajv");
const ajv = new Ajv();

const userSchema = require("./user/userSchema");
const cartSchema = require("./cart/cartSchema");
const productSchema = require("./product/productSchema");

module.exports = {
  validateUserSchema: ajv.compile(userSchema),
  validateCartSchema: ajv.compile(cartSchema),
  validateProductSchema: ajv.compile(productSchema),
};
