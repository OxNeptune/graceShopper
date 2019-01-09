const Sequelize = require('sequelize')
const db = require('../db')

const Plant = db.define('plant', {
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 10
    }
  },
  size: {
    type: Sequelize.ENUM('small', 'medium', 'large')
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageURI: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Plant
