const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('orderItem', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  total: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 10
    }
  }
})

module.exports = OrderItem
