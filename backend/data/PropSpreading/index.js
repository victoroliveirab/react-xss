const { getObjectId } = require("mongo-seeding");

const data = [
  {
    name: "Victor",
    age: 30,
    isMale: true,
    style: {
      color: "#000",
      backgroundColor: "#ccc",
    },
    dangerouslySetInnerHTML: {
      __html: "<img onerror='alert(\"Hacked!\");' src='invalid-image' />",
    },
  },
];

module.exports = data.map((obj) => ({
  ...obj,
  _id: getObjectId(obj.name),
}));
