const router = require('express').Router()
const stripe = require('stripe')('sk_test_yPgimMUmOGa4ZcrYR5DUwamP')
// router.use(require("body-parser").text());
module.exports = router

router.post('/charge', async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body
    })
    console.log(status)
    res.json({status})
  } catch (err) {
    res.status(500).end()
  }
})

// const app = require("express")();
// const stripe = require("stripe")("sk_test_yPgimMUmOGa4ZcrYR5DUwamP");

// app.use(require("body-parser").text());

// app.post("/charge", async (req, res) => {
//   console.log(req.body)
//   try {
//     let {status} = await stripe.charges.create({
//       amount: 2000,
//       currency: "usd",
//       description: "An example charge",
//       source: req.body
//     });

//     res.json({status});
//   } catch (err) {
//     res.status(500).end();
//   }
// });
