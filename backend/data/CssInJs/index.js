const { getObjectId } = require("mongo-seeding");

const data = [
  {
    name: "Victor",
    age: 30,
    isMale: true,
    style: {
      color: "#000",
      backgroundColor: "#eab",
    },
  },
];

module.exports = data.map((obj) => ({
  ...obj,
  _id: getObjectId(obj.name),
}));
