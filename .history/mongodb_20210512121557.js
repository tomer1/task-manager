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
    // db.collection("users").insertOne({
    //   name: "Tomer",
    //   age: 33,
    // }, (error, result)=>{ 
    //   if (error) return console.log('unable to insert User');
    //   console.log(result);
    // });
    // db.collection("users").insertMany([
    //   {
    //     name: "Roei",
    //     age: 30,
    //   },
    //   {
    //     name: "Anat",
    //     age: 36,
    //   },
    // ], (err, result)=>{
    //   if (err) return console.log('unable to insert documents!');
    //   console.log(result.ops);
    // });
    db.collection('tasks').insertMany([{description: 'task 1'}])
  }
);
