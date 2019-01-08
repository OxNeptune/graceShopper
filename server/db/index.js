const db = require('./db')
const User = require('./models/user')
const Plant = require('./models/plant')

// register models
// require('./models')

Plant.belongsTo(User)
User.hasMany(Plant)

module.exports = {
  db,
  User,
  Plant
}
