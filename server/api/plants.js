const router = require('express').Router()
const {Plant} = require('../db/models')
module.exports = router

//get ALL
router.get('/', async (req, res, next) => {
  try {
    const plants = await Plant.findAll()
    res.json(plants)
  } catch (err) {
    next(err)
  }
})

//get one by ID
router.get('/:id', async (req, res, next) => {
  try {
    const plant = await Plant.findById(req.params.id)
    res.json(plant)
  } catch (err) {
    next(err)
  }
})
