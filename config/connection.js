// Set up MySQL connection
var mysql = require("mysql");

//stored password in separate env file so need dotenv if running locally but this is for heroku so need to remove

const aws = require('aws-sdk');

let s3 = new aws.S3({
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET
});

// create connection variable
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.S3_SECRET,
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