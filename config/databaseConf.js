const mongoose = require("mongoose");
const dbUrl = "mongodb://127.0.0.1:27017/Myopic"

const newInsultSchema = new mongoose.Schema({
    id: {type: String},
    insult: {type: String}
  });

module.exports.newInsultSchema = newInsultSchema
module.exports.dbUrl = dbUrl