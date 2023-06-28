const express = require("express");
const cors = require("cors");
const index = require("./routes/index");
const errorHandling = require("./middlewares/errorHandling");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(index);
// app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
