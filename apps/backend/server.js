const express = require("express");
const app = express();

require("dotenv").config();
require("./utils/db");

const api = require("./routes/api");

app.use(express.json());
app.use("/api", api);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
