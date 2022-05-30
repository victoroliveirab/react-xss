const http = require("http");
const { MongoClient } = require("mongodb");
const { bodyFromReq, buildInfoHTML } = require("./utils");

const MONGO_URL = "mongodb://admin:admin@mongo:27017";
const MONGO_DATABASE = "react-xss-samples";

async function getDataFromTable(tableName) {
  try {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    const db = client.db(MONGO_DATABASE);
    const collection = db.collection(tableName);
    const result = await collection.find({}).toArray();
    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function saveData(tableName, data) {
  try {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    const db = client.db(MONGO_DATABASE);
    const collection = db.collection(tableName);
    const result = await collection.insertOne(data);
    return {
      ...data,
      _id: result.insertedId,
    };
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function plainTagHandler(req, res) {
  if (req.method === "GET") {
    res.statusCode = 200;
    getDataFromTable("PlainTag").then((data) => {
      res.write(JSON.stringify({ data: buildInfoHTML(data) }));
      res.end();
    });
    return;
  }

  if (req.method === "POST") {
    res.statusCode = 201;
    const body = await bodyFromReq(req);
    saveData("PlainTag", body).then((data) => {
      res.write(JSON.stringify({ data }));
      res.end();
    });
    return;
  }
}

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Content-Type", "application/json");
    const { method, url } = req;
    if (method === "OPTIONS") {
      res.statusCode = 204;
      res.end();
      return;
    }

    try {
      const path = url.substring(1);
      switch (path) {
        case "plain-tag": {
          return plainTagHandler(req, res);
        }
        case "inner-html": {
          return;
        }
        case "href-abuse": {
          return;
        }
        case "prop-spreading": {
          return;
        }
        case "css-in-js": {
          return;
        }
      }
    } catch (err) {
      res.statusCode = 500;
      res.write(JSON.stringify({ err }));
      res.end();
    }
  })
  .listen(8080);
