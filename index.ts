import express from "express";
import router from "./routes/routes";

const app = express();
const port = 8080;

app.use("/weather", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
