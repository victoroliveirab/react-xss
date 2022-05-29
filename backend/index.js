const http = require("http");
const mongodb = require("mongodb");

async function getData() {
  try {
    const url = "mongodb://admin:admin@mongo:27017";
    const client = new mongodb.MongoClient(url);
    await client.connect();
    const db = client.db("react-xss-samples");
    const collection = db.collection("PropSpreading");
    const result = await collection.find({}).toArray();
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
}

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Content-Type", "application/json");
    if (req.method === "OPTIONS") {
      res.statusCode = 204;
      res.end();
      return;
    }
    res.statusCode = 200;
    getData().then((r) => {
      res.write(JSON.stringify({ data: r }));
      res.end();
    });
  })
  .listen(8080);
