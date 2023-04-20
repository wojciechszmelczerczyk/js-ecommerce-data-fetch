const { config } = require("dotenv");
const { getAll, getOne } = require("../api");
const _ = require("lodash");

config({ path: "../.env" });

const highestCartValue = async () => {
  try {
    const carts = await getAll(
      `${process.env.CARTS_URL}${process.env.CARTS_DATE_QUERY_STR}`
    );

    const result = await Promise.all(
      _.map(carts, async ({ userId, products }) => {
        const { name } = await getOne(process.env.USERS_URL, userId);
        const prices = await Promise.all(
          _.map(products, async ({ productId }) => {
            const { price } = await getOne(process.env.PRODUCTS_URL, productId);
            return price;
          })
        );
        const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);
        return {
          fullName: name,
          totalPrice: totalPrice,
        };
      })
    );

    const highestValueCart = _.maxBy(result, "totalPrice");

    return highestValueCart;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = highestCartValue;
