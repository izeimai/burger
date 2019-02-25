// Set up MySQL connection
var mysql = require("mysql");

//stored password in separate env file so need dotenv if running locally but this is for heroku so need to remove

const aws = require('aws-sdk');

let s3 = new aws.S3({
    secretAccessKey: process.env.DB_PASS
});

// create connection variable
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: s3.secretAccessKey,
    database: "burgers_db"
});

// Connect
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for use with ORM
module.exports = connection;