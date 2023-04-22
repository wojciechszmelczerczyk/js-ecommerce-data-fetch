const { config } = require("dotenv");
const { getAll } = require("../api");
const { getDistanceBetween } = require("geolocation-distance-between");
const _ = require("lodash");

config();

const furthestUsers = async () => {
  try {
    const users = await getAll(process.env.USERS_URL);

    const usersWithGeolocation = _.map(users, (user) => {
      const geolocation = _.chain(user.address.geolocation)
        .mapKeys((val, key) =>
          key === "lat" ? "latitude" : key === "long" ? "longitude" : key
        )
        .mapValues((val) => parseFloat(val))
        .value();

      return _.chain(user)
        .pick(["name"])
        .set("address.geolocation", geolocation)
        .value();
    });

    let maxDistance = 0;
    let firstUser = {};
    let secondUser = {};

    for (let i = 0; i < usersWithGeolocation.length; i++) {
      for (let j = i + 1; j < usersWithGeolocation.length; j++) {
        const {
          address: { geolocation: geolocation1 },
          name: name1,
        } = usersWithGeolocation[i];

        const {
          address: { geolocation: geolocation2 },
          name: name2,
        } = usersWithGeolocation[j];

        const distanceBetweenUsers = getDistanceBetween(
          geolocation1,
          geolocation2
        );

        if (maxDistance < distanceBetweenUsers)
          maxDistance = distanceBetweenUsers;
        firstUser = name1;
        secondUser = name2;
      }
    }

    return {
      distanceBetween: maxDistance,
      firstUser,
      secondUser,
    };
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

module.exports = furthestUsers;
