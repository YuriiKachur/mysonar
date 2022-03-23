const express = require ("express");
const  logger = require ( "morgan");
const  cors = require ("cors");
const { startApp } = require("./databaseSetup");

const testRouter = require("./components/test");
const eventsRouter = require('./routes/events');

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/test", testRouter);
app.use('/api/events', eventsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "Internal Server Error" } = err;

  res.status(status).json(message);
});

startApp(app);
