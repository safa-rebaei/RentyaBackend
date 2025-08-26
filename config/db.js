const mongoose = require("mongoose");

module.exports.connectToMongoDb = async () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect("mongodb+srv://safarebaei01:Ovicm7La1Yl4Kuoo@cluster0.zlxtctv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log(" Connected to MongoDB");
    })
    .catch((error) => {
      console.log("❌ MongoDB connection failed:", error.message);
    });
};
