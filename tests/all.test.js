const { config } = require("dotenv");
const { getAll } = require("../api");

config();

describe("GET", () => {
  test("/users", async () => {
    // Call the function and store the result in a variable
    const result = await getAll(process.env.USERS_URL);

    // Assert that the result is an array
    expect(Array.isArray(result)).toBe(true);
  });

  test("/products", async () => {
    // Call the function and store the result in a variable
    const result = await getAll(process.env.PRODUCTS_URL);

    // Assert that the result is an array
    expect(Array.isArray(result)).toBe(true);
  });

  test("/carts", async () => {
    // Call the function and store the result in a variable
    const result = await getAll(process.env.CARTS_URL);

    // Assert that the result is an array
    expect(Array.isArray(result)).toBe(true);
  });
});
