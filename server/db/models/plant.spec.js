const {expect} = require('chai')
const db = require('../db')
const Plant = db.model('plant')

describe('Plant model', () => {
  describe('Validations', () => {
    it('requires `name`', async () => {
      const plant = Plant.build()

      try {
        await plant.validate()
        throw Error(
          'validation was successful but should have failed without `name`'
        )
      } catch (err) {
        expect(err.message).to.contain('name cannot be null')
      }
    })

    it('requires `name` to not be an empty string', async () => {
      const plant = Plant.build({
        name: ''
      })

      try {
        await plant.validate()
        throw Error(
          'validation was successful but should have failed if name is an empty string'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
        /* handle error */
      }
    })
  })
})
