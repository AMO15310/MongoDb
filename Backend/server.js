const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const Connect = require("./config");
const router = require("./routes/routes");

const PORT = process.env.PORT;
const token = process.env.MONGOOSE_ACCESS;

app.use(express.json());
app.use(cors());
app.use("", router);

Connect(token);
app.listen(PORT, () => {
  console.log(`Server up and running on port  ${PORT}...`);
});
