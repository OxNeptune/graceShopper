const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_KEY)
module.exports = router

router.post('/charge', async (req, res) => {
  try {
    const token = req.body.stripeToken

    let {status} = await stripe.charges.create({
      amount: req.body.amount,
      currency: 'usd',
      description: 'Plant Planet Charge',
      source: token
    })
    console.log(status)
    res.json({status})
  } catch (err) {
    res.status(500).end()
  }
})
