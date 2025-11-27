import express from "express";
import shopRoute from "./routers/shopRoute.js";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/", shopRoute);

app.listen(port, () => {
  console.log("my port is listening");
});
