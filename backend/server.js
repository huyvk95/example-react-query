const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("combined"));

app.listen(3001, () => console.log("Server start at port 3001"));
