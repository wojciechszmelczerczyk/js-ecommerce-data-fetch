const { aggregateCategoryPrices, highestValueCart } = require("./utils");

aggregateCategoryPrices().then((res) => {
  console.log("\n================================");
  console.log("Aggregated prices by category");
  console.log("================================");
  console.log(res);
});

highestValueCart().then((res) => {
  console.log("\n================================");
  console.log("Highest value cart");
  console.log("================================");
  console.log(res);
});
