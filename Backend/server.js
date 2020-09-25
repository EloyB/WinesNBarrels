const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Import Routes
const authRoute = require("./routes/auth");
const ordersRoute = require("./routes/orders");

const app = express();
dotenv.config();

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db!")
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/orders", ordersRoute);

//Listener
app.listen(process.env.PORT, () =>
  console.log(`listening on localhost:${process.env.PORT}`)
);
