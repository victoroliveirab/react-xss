const { getObjectId } = require("mongo-seeding");

const data = [
  {
    name: "Victor",
    age: 30,
    isMale: true,
    style: {
      color: "#000",
      backgroundColor: `#eab;
      html:not(&) {
        input[value*="a"] { background: url(https://localhost/?a) }
        input[value*="b"] { background: url(https://localhost/?b) }
        input[value*="c"] { background: url(https://localhost/?c) }
        input[value*="d"] { background: url(https://localhost/?d) }
        input[value*="e"] { background: url(https://localhost/?e) }
        input[value*="f"] { background: url(https://localhost/?f) }
        input[value*="g"] { background: url(https://localhost/?g) }
        input[value*="r"] { background: url(https://localhost/?r) }
        input[value*="s"] { background: url(https://localhost/?s) }
        input[value*="u"] { background: url(https://localhost/?u) }
      }`,
    },
  },
];

module.exports = data.map((obj) => ({
  ...obj,
  _id: getObjectId(obj.name),
}));
