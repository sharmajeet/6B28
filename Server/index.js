const express = require("express");
const router = require("./Router/Task");
const app = express();
app.use(express.json());
const PORT = 8000;
// middleware
app.use("/api/v1", router);


app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
