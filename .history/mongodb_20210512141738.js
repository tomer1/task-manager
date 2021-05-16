//CRUD create read update delete ops

const { MongoClient, ObjectID } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) return console.log("unable to connect to d.b. !");

    const db = client.db(databaseName);
    // db.collection("users").findOne(
    //   { _id: new ObjectID("609bb59465668df2ba9e65ab") },
    //   (err, user) => {
    //     if (err) return console.log("falied to fetch !");
    //     console.log(user);
    //   }
    // );
    db.collection("users").find({ age: 33 }).toArray();

  }
);
