const {expect} = require('chai')
const db = require('../db')
const Address = db.model('address')

describe('Address model', () => {
  describe('Validations', () => {
    it('requires `name`', async () => {
      const address = Address.build()

      try {
        await address.validate()
        throw Error(
          'validation was successful but should have failed without `firstName`'
        )
      } catch (err) {
        expect(err.message).to.contain('firstName cannot be null')
      }
    })
  })
})
