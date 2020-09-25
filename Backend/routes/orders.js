const router = require("express").Router();
const Order = require("../models/Order");
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    orders: { title: "order 1", description: "some order from the user" },
  });
});

router.post("/create", async (req, res) => {
  const order = new Order({
    userId: req.body.userId,
    items: req.body.items,
  });

  try {
    const savedOrder = await order.save();
    res.status(201).send(savedOrder);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
