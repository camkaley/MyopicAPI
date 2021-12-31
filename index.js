const dbConfig = require("./config/databaseConf")
const mongoose = require("mongoose");
const cors = require('cors');
var express = require("express");
var app = express();

app.use(cors());
app.options('*', cors());

mongoose.connect(dbConfig.dbUrl, {});
var Insult = mongoose.model("Insult", dbConfig.newInsultSchema)

app.use(express.json());
app.listen(4000, () => {
  console.log("Server running on port 4000");
});

app.get("/insults", (req, res) => {
    getInsults(res)
})

app.post("/register", (req, res, next) => {
  if (req.body) {
    register(req.body, res)
  } else {
    res.sendStatus(400);
  }
});

async function getInsults(res) {
    Insult.find().then(insultList => {
        res.json(formatList(insultList))
    })
}

function formatList(insultList) {
    console.log(insultList)
    var formattedList = []
    insultList.map(insult => {
        formattedList.push({id: insult.id, insult: insult.insult})
    })

    return formattedList;
}

function register(body, response) {
    Insult.find().then(res => {
        var id = res.length + 1
        var newInsult = new Insult({id: `${id}`, insult: body.insult})
        newInsult.save()
        response.sendStatus(200)
    })
}


