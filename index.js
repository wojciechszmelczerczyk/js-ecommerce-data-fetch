const {
  aggregateCategoryPrices,
  highestValueCart,
  furthestUsers,
} = require("./utils");

aggregateCategoryPrices()
  .then((res) => {
    console.log("\n================================");
    console.log("Aggregated prices by category");
    console.log("================================");
    console.log(res);
  })
  .catch((err) => console.log(err));

highestValueCart()
  .then((res) => {
    console.log("\n================================");
    console.log("User with highest cart value");
    console.log("================================");
    console.log(res);
  })
  .catch((err) => console.log(err));

furthestUsers()
  .then((res) => {
    console.log("\n================================");
    console.log("Furthest distance between users");
    console.log("================================");
    console.log(res);
  })
  .catch((err) => console.log(err));
