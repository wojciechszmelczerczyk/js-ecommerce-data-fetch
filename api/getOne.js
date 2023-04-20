const { config } = require("dotenv");

config({ path: "../.env" });

const getOne = async (resource, resourceId) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/${resource}/${resourceId}`
    );

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error fetching products data:", err);
    throw err;
  }
};

module.exports = getOne;
