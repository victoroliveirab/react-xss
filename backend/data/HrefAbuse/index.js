const { getObjectId } = require("mongo-seeding");

const data = [
  {
    title: "Meu blog",
    href: "http://www.example.com",
  },
  {
    title: "Nautico",
    href: "https://www.nautico-pe.com.br",
  },
  {
    title: "Link inocente",
    href: "javascript:alert('hacked!');",
  },
];

module.exports = data.map((obj) => ({
  ...obj,
  _id: getObjectId(obj.title),
}));
