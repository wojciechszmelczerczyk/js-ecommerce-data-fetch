const { config } = require("dotenv");

config();

const getOne = async (resource, resourceId) => {
  try {
    // if id is not an integer value, throw an error
    if (!+resourceId) {
      throw new Error(
        `Please provied id of integer value, ${resourceId} is not an integer!`
      );
    }
    const res = await fetch(
      `${process.env.BASE_URL}/${resource}/${resourceId}`
    );

    const data = await res.json();

    // if resource with provided id doesn't exists, throw an error,
    // cut last letter of resource name to be singular
    if (!data) {
      throw new Error(
        `${resource.slice(0, -1)} with id:${resourceId} doesn't exists!`
      );
    }

    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = getOne;
