const { config } = require("dotenv");
const { getOne } = require("../api");

config();

describe("GET /users/:id", () => {
  test("should response with user data, when user with provided id exists", async () => {
    const userId = 1;

    // name of user with id 1
    const expectedName = "john";
    try {
      // call api
      const result = await getOne(process.env.USERS_URL, userId);

      // check if user name from api response is same as expected
      expect(result.name.firstname).toBe(expectedName);
    } catch (err) {
      //   console.log(err.message);
      expect(err.message).toBeTruthy();
    }
  });
  test("should prompt an error, when user with provided id doesn't exist", async () => {
    const userId = 3000;
    try {
      // Call the function and store the result in a variable
      const result = await getOne(process.env.USERS_URL, userId);

      // Assert that the result is an array
      expect(result).toBeTruthy();
    } catch (err) {
      expect(err.message).toBe(
        `${process.env.USERS_URL.slice(
          0,
          -1
        )} with id:${userId} doesn't exists!`
      );
    }
  });
  test("should prompt an error, when provided id is not an integer", async () => {
    const userId = "z";
    try {
      // Call the function and store the result in a variable
      const result = await getOne(process.env.USERS_URL, userId);

      // Assert that the result is an array
      expect(result).toBeTruthy();
    } catch (err) {
      expect(err.message).toBe(
        `Please provied id of integer value, ${userId} is not an integer!`
      );
    }
  });
});

describe("GET /products/:id", () => {
  test("should response with product data, when product with provided id exists", async () => {
    const productId = 1;
    try {
      // title of product with id 1
      const expectedProductTitle =
        "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops";

      // Call the function and store the result in a variable
      const result = await getOne(process.env.PRODUCTS_URL, productId);

      // check if product title from api response is same as expected
      expect(result.title).toBe(expectedProductTitle);
    } catch (err) {
      expect(err.message).toBeTruthy();
    }
  });
  test("should prompt an error, when provided id is not an integer", async () => {
    const productId = "z";
    try {
      // Call the function and store the result in a variable
      const result = await getOne(process.env.PRODUCTS_URL, productId);

      // Assert that the result is an array
      expect(result).toBeTruthy();
    } catch (err) {
      console.log(err.message);
      expect(err.message).toBe(
        `Please provied id of integer value, ${productId} is not an integer!`
      );
    }
  });
});
