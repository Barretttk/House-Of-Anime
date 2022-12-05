const express = require("express");
const app = express();

app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const colors = require("colors");
colors.enable();

const cors = require("cors");
app.use(cors());

const connectDb = require("./server/config/mongoose.config");
connectDb();

const userRouter = require("./server/routes/user.routes");
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 8000;

//! this needs to be below the other code blocks
app.listen(PORT, () =>
  console.log(colors.rainbow(`We are in the pipe, 5 by 5 : ${PORT}`))
);
