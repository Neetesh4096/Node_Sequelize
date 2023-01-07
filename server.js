const express = require("express");
const app = express();
const data = require('./database')

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", data.getall);
app.post("/", data.create);

app.listen(port, (req, res) => {
  console.log(`Server Running At ${port}`);
});
