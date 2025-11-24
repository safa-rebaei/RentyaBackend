const mongoose = require("mongoose");

module.exports.connectToMongoDb = async () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(" Connected to MongoDB");
    })
    .catch((error) => {
      console.error(" Connection failed:");
    });
    
};






