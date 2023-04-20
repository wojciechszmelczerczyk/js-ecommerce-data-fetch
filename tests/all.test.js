const { config } = require("dotenv");
const { getAll } = require("../api");
const {
  validateUserSchema,
  validateCartSchema,
  validateProductSchema,
} = require("../schemas");

config();

describe("GET /users", () => {
  test("should return json response which match expected user schema", async () => {
    const result = await getAll(process.env.USERS_URL);

    // expect result to match user schema
    expect(validateUserSchema(result)).toBe(true);
  });
});

describe("GET /products", () => {
  test("should return json response which match expected product schema", async () => {
    const result = await getAll(process.env.PRODUCTS_URL);

    // expect result to match product schema
    expect(validateProductSchema(result)).toBe(true);
  });
});

describe("GET /carts", () => {
  test("should return json response which match expected cart schema", async () => {
    const result = await getAll(process.env.CARTS_URL);

    // expect result to match cart schema
    expect(validateCartSchema(result)).toBe(true);
  });
});
