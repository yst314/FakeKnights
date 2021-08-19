const express = require("express");
const app  = express();
const port = 8080;

app.get("/", (req, res) =>{
  res.sendFile(`${__dirname}/public/canvas.html`)
  console.log("/ へアクセスがありました");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});