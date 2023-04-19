const getCarts = async () => {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07"
    );

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }

    const cartsData = await res.json();

    return cartsData;
  } catch (err) {
    console.error("Error fetching products data:", err);
    throw err;
  }
};

module.exports = getCarts;
