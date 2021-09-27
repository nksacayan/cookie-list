import express from "express";
import mysql from "mysql2";

import password from "../private/password";

const app = express();
const PORT = 3000;

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: password,
  database: "cookielist",
});

let sqlTestQuery = "SELECT * FROM user";

connection.connect((error) => {
  if (error) {
    console.error("error connecting: " + error.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

connection.query(sqlTestQuery, (error, results) => {
  if (error) throw error;

  console.log("This is a test query");
  console.log(results);
});

app
  .route("/api")
  .get((req, res) => {
    let sql = "SELECT * FROM user";
    connection.query(sql, (error, results) => {
      if (error) throw error;

      res.send(results);
    });
  })
  .post((req, res) => {
    let sql =
      "INSERT INTO user (username, email, password) VALUES ('testName', 'testEmail', 'testPassword')";
    connection.query(sql, (error, results) => {
      if (error) throw error;

      res.send(results);
    });
  });

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

// connection.end();
// Idk when im supposed to end this
