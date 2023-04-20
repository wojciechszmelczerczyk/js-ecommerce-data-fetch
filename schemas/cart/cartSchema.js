const cartSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "number" },
      userId: { type: "number" },
      date: { type: "string" },
      products: {
        type: "array",
        items: {
          type: "object",
          properties: {
            productId: { type: "number" },
            quantity: { type: "number" },
          },
          required: ["productId", "quantity"],
        },
      },
      __v: { type: "number" },
    },
  },
};

module.exports = cartSchema;
