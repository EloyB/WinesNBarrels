const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51HT4uqBonx7Aa8gBDpRHP2F9rHkr2LWeBWkBtmMORnaSO2d8ygmZp8YOrVj8h5Jwr9luQafEtiwpZfCshFfqLCpu00wWEaBRKQ"
);

router.post("/create", async (req, res) => {
  const total = req.body.total;
  console.log("total: ", total);
  if (total < 0) return res.status(401).send("Amount must be greater than 0");

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    console.log(paymentIntent);
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(401).send(error);
  }
});

module.exports = router;
