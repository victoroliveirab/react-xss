const { getObjectId } = require("mongo-seeding");

const data = [
  {
    payload: "Comprar melancia",
  },
  {
    payload: "Marcar médico",
  },
  {
    payload: '<img src="not-an-img" onerror="alert(\'hacked\');" />',
  },
];

module.exports = data.map((obj) => ({
  ...obj,
  _id: getObjectId(obj.payload),
}));
