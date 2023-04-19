const getProduct = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }

    const productData = await res.json();

    return productData;
  } catch (err) {
    console.error("Error fetching products data:", err);
    throw err;
  }
};

module.exports = getProduct;
