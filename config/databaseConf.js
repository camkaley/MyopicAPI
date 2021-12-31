const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://admin:cia5wqod@cluster0.jcuki.mongodb.net/Myopic?retryWrites=true&w=majority"

const newInsultSchema = new mongoose.Schema({
    id: {type: String},
    insult: {type: String}
  });

module.exports.newInsultSchema = newInsultSchema
module.exports.dbUrl = dbUrl