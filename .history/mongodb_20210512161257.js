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

    db.collection("users").dele({age:33})
    .then((res) => console.log(res))
    .catch((res) => console.log(res))
      

  }
);
