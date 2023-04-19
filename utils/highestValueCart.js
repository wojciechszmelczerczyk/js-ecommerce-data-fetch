const _ = require("lodash");

const { getCarts, getProduct, getUser } = require("../api");

const highestCartValue = async () => {
  try {
    const carts = await getCarts();

    const result = await Promise.all(
      _.map(carts, async ({ userId, products }) => {
        const { name } = await getUser(userId);
        const prices = await Promise.all(
          _.map(products, async ({ productId }) => {
            const { price } = await getProduct(productId);
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
