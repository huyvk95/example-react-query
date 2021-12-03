const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { router } = require("./router");

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(router);

app.listen(3001, () => console.log("Server start at port 3001"));
