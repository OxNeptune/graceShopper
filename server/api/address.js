const router = require('express').Router()
const {Address} = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const userId = req.session.userid
    const reqBody = req.body
    const firstName = reqBody.firstName
    const lastName = reqBody.lastName
    const firstLine = reqBody.firstLine
    const secondLine = reqBody.secondLine
    const lastLine = reqBody.lastLine
    const city = reqBody.city
    const state = reqBody.state
    const zip = reqBody.zip

    if (
      firstName === '' ||
      lastName === '' ||
      firstLine === '' ||
      lastLine === '' ||
      city === '' ||
      state === '' ||
      zip === ''
    ) {
      res.status(401).send('Cant have blank fields')
    } else {
      const address = {
        firstName,
        lastName,
        firstLine,
        secondLine,
        lastLine,
        city,
        state,
        zip,
        userId
      }
      const createdAddress = await Address.create(address)

      res.json(createdAddress)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:addressId', async (req, res, next) => {
  try {
    const addressId = req.params.addressId
    const addressToDestroy = await Address.findById(addressId)

    await Address.destroy({
      where: {
        id: addressId
      }
    })
    res.json(addressToDestroy)
  } catch (err) {
    next(err)
  }
})
