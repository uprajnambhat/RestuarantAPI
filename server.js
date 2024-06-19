const express = require("express");
const app = express();
const cors = require("cors");
const mainDishRouter = require("./routes/mainDishes.js");
// const breakFastRouter = require("./routes/breakFast.js");
app.use(cors());
app.use("/mainDishes", mainDishRouter);
// app.use("/breakFast", breakFastRouter);
app.listen(3004);
