const chalk = require("chalk");
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./network/routes");
const db = require("./db");
const cors = require("cors");

require("dotenv").config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT;

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;
db(uri);

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.listen(PORT);
console.log(chalk.yellow(`App listen in @HOST:${PORT}`));
