require("reflect-metadata");
const { logIn, registratinon } = require("./controller/user.js");
const express = require("express");
const { appDataSource } = require("./config/database.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = express.Router();
module.exports.router = router;

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.post("/register", registratinon);
app.post("/login", logIn);

appDataSource.initialize().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on 3000");
  });
});
