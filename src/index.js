const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config/server.config");
const appRouter = require("./routes/index");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use("/api", appRouter);

app.get("/ping", (req, res) => {
  res.status(200).json({
    message: "server is healthy and pinged",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
