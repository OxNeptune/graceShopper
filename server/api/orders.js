const router = require('express').Router()
const {Order, Plant} = require('../db/models')
module.exports = router

// get ALL
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      // where: {
      //   userId: req.session.userId
      // },
      include: [
        {
          model: Plant
        }
      ]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

//get one by ID
// router.get('/:id', async (req, res, next) => {
//   try {
//     const order = await Order.findById(req.params.id)
//     res.json(order)
//   } catch (err) {
//     next(err)
//   }
// })
