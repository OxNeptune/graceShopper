const router = require('express').Router()
const {Plant, User, CartItem, Cart} = require('../db/models')
// const Cart = require('../db/models/cart')

module.exports = router

// get the cart where the user_id matches the user_id that we send
// through the request
// and we need to include the cart items associated with that cart

//cart.getPlants()

router.get('/', async (req, res, next) => {
  try {
    const cartWithPlants = await Cart.findById(req.session.cartId, {
      include: {
        model: Plant
      }
    })
    res.json(cartWithPlants)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    // find all the plants associated with that users cart
    const cartWithPlants = await Cart.findOne({
      where: {
        userId: req.session.userId
      },
      include: {
        model: Plant
      }
    })
    // const deletedPlant = await
    // delete the plant with the id given to us through params
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  const {plantId, quantity, total} = req.body
  const cartId = req.session.cartId
  try {
    const cartItem = await CartItem.create({
      plantId,
      quantity,
      total,
      cartId
    })
    res.send(cartItem)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  const {plantId, quantity, total} = req.body
  try {
    const plantToUpdate = await CartItem.findOne({
      where: {
        plantId: plantId,
        cartId: req.session.Id
      }
    })
    const updatedPlant = await plantToUpdate.update({
      quantity,
      total,
      where: {
        returning: true
      }
    })
    res.send(updatedPlant)
  } catch (err) {
    next(err)
  }
})
