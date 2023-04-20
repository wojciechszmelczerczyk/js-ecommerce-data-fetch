const productSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "number" },
      title: { type: "string" },
      price: { type: "number" },
      category: { type: "string" },
      image: { type: "string" },
      rating: {
        type: "object",
        properties: {
          rate: { type: "number" },
          count: { type: "number" },
        },
      },
    },
  },
};

module.exports = productSchema;
