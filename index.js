const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const { MONGODB_CONN, PORT, LOGIN_PATH } = require("./config");

const { cors } = require("./middlewares/cors");
const { connectToDatabase } = require("./database/connect");

const { apiRouter, pagesRouter } = require("./routes");
const app = express();

connectToDatabase(MONGODB_CONN); 

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  apiRouter,
  pagesRouter,
  express.static(path.join(path.resolve(), "./public"))
);

app.get("/", (req, res) => {
  res.redirect(LOGIN_PATH);
});

app.listen(PORT, async () => {
  let chalk;
  try {
    const chalkModule = await import("chalk");
    chalk = chalkModule.default;
    console.log(`App listening on port ${PORT}`)
  } catch (err) {
    chalk = require("chalk");
  }

});
