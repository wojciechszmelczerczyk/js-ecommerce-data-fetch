const getUser = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/users/${id}`);

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }

    const userData = await res.json();

    return userData;
  } catch (err) {
    console.error("Error fetching products data:", err);
    throw err;
  }
};

module.exports = getUser;
