const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// setup routes...
app.get("/pages/:userName", (req, res) => {
  const userName = req.params.userName;
  console.log(userName);

  res.send(`hello there ${userName}`);
});

app.get("/another-one", (req, res) => {
  res.send("This one works, too!");
});

exports.api = functions.https.onRequest(app);

// We did it
