const path = require("path");
const { Seeder } = require("mongo-seeding");

const consoleMessage = "Success! Total time seeding";

console.time(consoleMessage);

const seeder = new Seeder({
  database: {
    name: "react-xss-samples",
    username: "admin",
    password: "admin",
    host: "127.0.0.1",
    port: 27017,
  },
  dropCollections: true,
});

const collections = seeder.readCollectionsFromPath(
  path.resolve(__dirname, "data"),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  }
);

seeder
  .import(collections)
  .then(() => {
    console.timeEnd(consoleMessage);
  })
  .catch((err) => {
    console.log("Error", err);
  });
