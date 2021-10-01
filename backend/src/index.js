import express from "express";
import mysql from "mysql2";

import password from "../private/password";

const app = express();
const PORT = 8000;

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: password,
  database: "cookielist",
});

connection.connect((error) => {
  if (error) {
    console.error("error connecting: " + error.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/cookie", (req, res) => {
  let sql = "SELECT * FROM cookie";
  defaultConnectionQuery(sql, res);
});

app.get("/cookie/:id", (req, res) => {
  let id = mysql.escape(req.params.id);
  let sql = `SELECT * FROM cookie WHERE id = ${id}`;
  defaultConnectionQuery(sql, res);
});

app.post("/cookie/:name", (req, res) => {
  let name = mysql.escape(req.params.name);
  let sql = `INSERT INTO cookie (name) VALUES (${name})`;
  defaultConnectionQuery(sql, res);
});

function defaultConnectionQuery(sql, res) {
  connection.query(sql, (error, results) => {
    if (error) throw error;

    res.send(results);
  });
}

// Decided against focusing on user accounts, commented instead of deleted for now
// app.post("/api", (req, res) => {
//   let sql =
//     "INSERT INTO user (username, email, password) VALUES ('testName', 'testEmail', 'testPassword')";
//   connection.query(sql, (error, results) => {
//     if (error) throw error;

//     res.send(results);
//   });
// });

// app.get("/api", (req, res) => {
//   let sql = "SELECT * FROM user";
//   connection.query(sql, (error, results) => {
//     if (error) throw error;

//     res.send(results);
//   });
// });

// app.get("/api/:id", (req, res) => {
//   let sql = "SELECT * FROM user";
//   connection.query(sql, (error, results) => {
//     if (error) throw error;

//     res.send(results);
//   });
// });

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

// connection.end();
// Idk when im supposed to end this
