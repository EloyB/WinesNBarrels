const router = require("express").Router();
const Order = require("../models/Order");
const verify = require("./verifyToken");

router.get("/", async (req, res) => {
  const orders = await Order.find({});

  if (orders.length == 0) {
    res.status(200).send("No orders found.");
  } else {
    res.status(200).json(orders);
  }
});

router.get("/user", async (req, res) => {
  const orders = await Order.find({ userId: req.body.userId });

  if (orders.length == 0) {
    res.status(200).send("No orders found.");
  } else {
    res.status(200).json(orders);
  }
});

router.post("/create", async (req, res) => {
  const order = new Order({
    userId: req.body.userId,
    items: req.body.items,
    total: req.body.total,
    orderDate: req.body.orderDate,
  });

  try {
    const savedOrder = await order.save();
    res.status(201).send(savedOrder);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
