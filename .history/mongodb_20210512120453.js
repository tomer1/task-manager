//CRUD create read update delete ops

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) return console.log("unable to connect to d.b. !");

    const db = client.db(databaseName);
    db.collection("users").insertOne({
      name: "Tomer",
      age: 33,
    }, (error, result)=>{ 
      if (error) return console.log('unable to insert User');
      console.log(result);
    });
  }
);
