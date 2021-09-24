import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let data = {
  name: "Nick",
  age: "18",
};

app.get("/", (req, res) => {
  res.json(data);
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
