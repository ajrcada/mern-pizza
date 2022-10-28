const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://ajcadahing:password01@cluster0.heaul36.mongodb.net/MERNPIZZA";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongo DB Connection Successful`);
});

db.on("error", () => {
  console.log(`Mongo DB Connection Failed`);
});

module.exports = mongoose;
