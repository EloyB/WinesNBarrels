const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//Import Routes
const authRoute = require("./routes/auth");
const ordersRoute = require("./routes/orders");
const paymentsRoute = require("./routes/payments");

const app = express();
app.use(cors({ origin: true }));
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
app.use("/api/payments", paymentsRoute);

//Listener
app.listen(process.env.PORT, () =>
  console.log(`listening on localhost:${process.env.PORT}`)
);
