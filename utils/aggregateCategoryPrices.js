const _ = require("lodash");
const getProducts = require("../api/products");

const aggregateCategoryPrices = async () => {
  const products = await getProducts();

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
};

module.exports = aggregateCategoryPrices;
