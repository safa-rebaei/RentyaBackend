const mongoose = require("mongoose");

module.exports.connectToMongoDb = async () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect("mongodb+srv://safarebaei01:LMAPV7Rn3oxLtOkn@cluster0.k6jk5j8.mongodb.net/")
    .then(() => {
      console.log("connect to db");
    })
    .catch((error) => {
      console.log(error);
    });
};



// LMAPV7Rn3oxLtOkn