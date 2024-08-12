const express = require("express");

const indexRouter = require("./routes/index.js");

const app = new express();
const port = 9000;

// view engine setup
app.set("view engine", "hbs");

app.use(express.static("public"));

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server started running on port: ${port}`);
});
