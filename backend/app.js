const express = require("express");
const morgan = require("morgan");

require("dotenv").config();
require("./models/db");

const userRouter = require("./routes/user");

const User = require("./models/user");

port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(morgan("dev"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
