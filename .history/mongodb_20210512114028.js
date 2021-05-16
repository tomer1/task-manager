//CRUD create read update delete ops

const mongodb  = require ('mongodb');
mongodb.MongoClient = mongodb.MongoClient;
const connectionUrl ='mongodb://127.0.0.1:27017'
const databaseName ='task-manager'
mongodb.MongoClient