const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Plant = db.model('plant')

describe('Plant routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/plants/', () => {
    beforeEach(() => {
      return Plant.create({
        type: 'flowers',
        name: 'Peace Lily',
        price: 29,
        size: 'small',
        description:
          'The Peace Lily is a popular indoor houseplant. It lives best in shade and needs little sunlight to thrive, and is watered approximately once a week. The soil is best left moist but only needs watering if the soil is dry.',
        image: '/public/images/peaceLily.jpg'
      })
    })

    it('GET /api/plants', async () => {
      const res = await request(app)
        .get('/api/plants')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal('Peace Lily')
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
