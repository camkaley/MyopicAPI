const username = "admin";
const password = "";
const dbHost = "cluster0.jcuki.mongodb.net"
const dbName = "insultDB";

const dbUrl = `mongodb+srv://${username}:${password}@${dbHost}/${dbName}`;

module.exports = Object.freeze({
    dbURL: dbUrl
});