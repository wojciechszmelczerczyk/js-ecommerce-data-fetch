const getUsers = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/users");

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }

    const usersData = await res.json();
    console.log(usersData);
    return usersData;
  } catch (err) {
    console.error("Error fetching products data:", err);
    throw err;
  }
};

module.exports = getUsers;
