const { config } = require("dotenv");

config();

const getAll = async (resource) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/${resource}`);

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

module.exports = getAll;
