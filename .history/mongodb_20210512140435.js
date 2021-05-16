//CRUD create read update delete ops

const {MongoClient, ObjectID} = require("mongodb");

const id = new ObjectID();
console.log(id.id.length);
// console.log(id.getTimestamp());

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) return console.log("unable to connect to d.b. !");

    const db = client.db(databaseName);
    // db.collection("users").insertOne({
    //   name: "Yasmin",
    //   age: 28,
    //   _id:id
    // }, (error, result)=>{ 
    //   if (error) return console.log('unable to insert User');
    //   console.log(result.ops);
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
    // db.collection("tasks").insertMany([
    //   { description: "task 1", completed: true },
    //   { description: "task 2", completed: false },
    //   { description: "task ", completed: false },
    // ]);

  }
);
