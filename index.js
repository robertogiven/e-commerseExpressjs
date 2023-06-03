const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World! Roberto Given januari asdadsas");
});

// app.get("/datadummy", (req, res) => {
//   const dataDummyBuah = ["aple", "semangka", "anggur"];
//   return res.send(dataDummyBuah);
// });

const routerVersi1 = require("./Routes/RouterVersi1");

app.use("/api", routerVersi1);
