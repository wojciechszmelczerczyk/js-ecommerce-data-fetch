const { config } = require("dotenv");
const { getAll } = require("../api");
const _ = require("lodash");

config();

const aggregateCategoryPrices = async () => {
  try {
    const products = await getAll(process.env.PRODUCTS_URL);

    // pick only category and price from product schema
    const productsWithCategoryAndPrice = _.map(products, (product) =>
      _.pick(product, ["category", "price"])
    );

    // sum prices for specific categories
    const res = _(productsWithCategoryAndPrice)
      .groupBy("category")
      .map((items, category) => ({ category, total: _.sumBy(items, "price") }))
      .value();

    return res;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

module.exports = aggregateCategoryPrices;
