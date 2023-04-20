const { config } = require("dotenv");
const { getAll } = require("../api");
const { getDistanceBetween } = require("geolocation-distance-between");
const _ = require("lodash");

config();

const furthestUsers = async () => {
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
      const distanceBetweenUsers = getDistanceBetween(
        usersWithGeolocation[i]["address"]["geolocation"],
        usersWithGeolocation[j]["address"]["geolocation"]
      );

      if (maxDistance < distanceBetweenUsers)
        maxDistance = distanceBetweenUsers;
      firstUser = usersWithGeolocation[i]["name"];
      secondUser = usersWithGeolocation[j]["name"];
    }
  }

  return {
    distanceBetween: maxDistance,
    firstUser,
    secondUser,
  };
};

module.exports = furthestUsers;
