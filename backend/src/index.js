import express from "express";
import mysql from "mysql2";

const app = express();
const PORT = 3000;

app.use(express.json());

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rohan_Brain!",
  database: "cookielist",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

connection.query("SELECT * FROM cookielist.user", function (err, rows, fields) {
  if (err) throw err;

  console.log(rows[0]);
});

let testData = {
  name: "Nick",
  age: "18",
};

app.get("/", (req, res) => {
  res.json(testData);
});

app.post("/", (req, res) =>
  res.send(`a post request with / route on port ${PORT}`)
);

app.post("/:id", (req, res) => {
  res.send(`a post request with / route on port ${PORT}`);
  console.log(req.params.id);
});

app.put("/", (req, res) =>
  res.send(`a put request with / route on port ${PORT}`)
);

app.delete("/", (req, res) =>
  res.send(`a post delete with / route on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

connection.end();
