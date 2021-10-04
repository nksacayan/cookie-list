import express from "express";
import mysql from "mysql2";
import process from "process";

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

// connects to database explicitly
connection.connect((error) => {
  if (error) {
    console.error("error connecting: " + error.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// routes

// get all cookies
app.get("/api/cookie", (req, res) => {
  let sql = "SELECT * FROM cookie";
  defaultConnectionQuery(sql, res);
});

// get cookie by id
app.get("/api/cookie/id-:id", (req, res) => {
  let id = mysql.escape(req.params.id);
  let sql = `SELECT * FROM cookie WHERE id = ${id}`;
  defaultConnectionQuery(sql, res);
});

// space == %20
// get cookie by name
app.get("/api/cookie/name-:name", (req, res) => {
  let name = mysql.escape(req.params.name);
  let sql = `SELECT * FROM cookie WHERE name = ${name}`;
  defaultConnectionQuery(sql, res);
});

// add new cookie by name
app.post("/api/cookie/:name", (req, res) => {
  let name = mysql.escape(req.params.name);
  let sql = `INSERT INTO cookie (name) VALUES (${name})`;
  defaultConnectionQuery(sql, res);
});

// update name
app.patch("/api/cookie/:name/newName-:newName", (req, res) => {
  let name = mysql.escape(req.params.name);
  let newName = mysql.escape(req.params.newName);
  let sql = `UPDATE cookie SET name = ${newName} WHERE name = ${name}`;
  defaultConnectionQuery(sql, res);
});

// update score
app.patch("/api/cookie/:name/score-:score", (req, res) => {
  let name = mysql.escape(req.params.name);
  let score = mysql.escape(req.params.score);
  let sql = `UPDATE cookie SET score = ${score} WHERE name = ${name}`;
  defaultConnectionQuery(sql, res);
});

// delete cookie by id
app.delete("/api/cookie/id-:id", (req, res) => {
  let id = mysql.escape(req.params.id);
  let sql = `DELETE FROM cookie WHERE id = ${id}`;
  defaultConnectionQuery(sql, res);
});

// delete cookie by name
app.delete("/api/cookie/name-:name", (req, res) => {
  let name = mysql.escape(req.params.name);
  let sql = `DELETE FROM cookie WHERE name = ${name}`;
  defaultConnectionQuery(sql, res);
});

function defaultConnectionQuery(sql, res) {
  connection.query(sql, (error, results) => {
    if (error) throw error;

    res.send(results);
  });
}

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
