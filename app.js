const express = require("express");

const indexRouter = require("./routes/index.js");
const quoterRouter = require("./routes/quote.js");

const app = new express();
const port = 9000;

// view engine setup
app.set("view engine", "hbs");

app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/quote", quoterRouter);

app.listen(port, () => {
  console.log(`Server started running on port: ${port}`);
});
