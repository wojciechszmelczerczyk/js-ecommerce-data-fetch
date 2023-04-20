const { config } = require("dotenv");
const { getAll } = require("../api");

config();

describe("GET", () => {
  test("/users/:id", async () => {
    const userId = 1;

    // Call the function and store the result in a variable
    const result = await getAll(process.env.USERS_URL, userId);

    // Assert that the result is an array
    expect(result).toBeTruthy();
  });

  test("/products/:id", async () => {
    const productId = 1;

    // Call the function and store the result in a variable
    const result = await getAll(process.env.PRODUCTS_URL, productId);

    // Assert that the result is an array
    expect(result).toBeTruthy();
  });
});
