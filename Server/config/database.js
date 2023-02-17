const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose')
const uri = "mongodb+srv://se4gd:se4gd1234@cluster0.zydqizn.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const connectDB = async () => {
    mongoose.connect(uri, () => {
        console.log("Connected to MongoDB");
      });
      
}

module.exports = connectDB
