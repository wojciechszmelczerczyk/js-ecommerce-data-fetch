const getProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }

    const productsData = await res.json();

    return productsData;
  } catch (err) {
    console.error("Error fetching products data:", err);
    throw err;
  }
};

module.exports = getProducts;
