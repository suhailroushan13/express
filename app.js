import express from "express";

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("<h1>Hello I am a Express Server</h1>");
});

app.listen(port, () => {
  console.log(`Server Listening at Port ${port}`);
});
