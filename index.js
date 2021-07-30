const config = require("./Config/DBConfig");
const schemas = require("./Config/DBSchemas")
const mongoose = require("mongoose");

run();

function run() {
  getDBConnection()
    .then((dbConnection) => getAllInsults())
    .catch(() => {
      console.log("DB Connection failed");
    });
}

function getDBConnection() {
  return new Promise((resolve, reject) => {
    mongoose.connect(`${config.dbURL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;

    db.on("error", function () {
      reject(null);
    });

    db.once("open", function () {
      resolve(db);
    });
  });
}

async function getAllInsults(){
  const Insult = mongoose.model("Insult", schemas.insultSchema, "insultDB");
  const filter = {};

  const results = await Insult.find(filter);

  const insultList = []
  for(const insultItem of results){
    insultList.push(insultItem.insult)
  }

  console.log(insultList)
}

function addInsult(insult) {
  const Insult = mongoose.model("Insult", schemas.insultSchema, "insultDB");
  const newInsult = new Insult({insult: insult});
  newInsult.save(function(err, insult){
    if(err) console.log(err);
    console.log("Insult added to DB")
  })
}
