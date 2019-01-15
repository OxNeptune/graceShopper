const router = require('express').Router()
const stripe = require('stripe')('sk_test_yPgimMUmOGa4ZcrYR5DUwamP')
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
