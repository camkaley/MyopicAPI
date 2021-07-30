const mongoose = require("mongoose");

const insultSchema = new mongoose.Schema({
    insult: String
})

module.exports = Object.freeze({
    insultSchema: insultSchema
});