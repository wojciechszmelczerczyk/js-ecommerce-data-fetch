const userSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      address: {
        type: "object",
        properties: {
          geolocation: {
            type: "object",
            properties: {
              lat: {
                type: "string",
              },
              long: {
                type: "string",
              },
            },
          },
          city: {
            type: "string",
          },
          street: {
            type: "string",
          },
          number: {
            type: "number",
          },
          zipcode: {
            type: "string",
          },
        },
      },
      id: {
        type: "number",
      },
      email: {
        type: "string",
      },
      username: {
        type: "string",
      },
      password: {
        type: "string",
      },
      name: {
        type: "object",
        properties: {
          firstname: {
            type: "string",
          },
          lastname: {
            type: "string",
          },
        },
      },
      phone: {
        type: "string",
      },
      __v: {
        type: "number",
      },
    },
  },
};

module.exports = userSchema;
