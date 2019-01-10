const User = require('./user')
const Plant = require('./plant')
const Order = require('./order')
const Cart = require('./cart')
const Address = require('./address')
const CartItem = require('./cartItem')
const OrderItem = require('./OrderItem')

//Creates Association between USer and Order where an Order has one User (userid) and the User can have
// many orders
User.hasMany(Order)

//Creates association betweet cart and User. A cart belongs to one user.
Cart.belongsTo(User)

//Creates Association between User and Address, a user can have many addresses
User.hasMany(Address)

//Creates association between order and user. Order will have one user_id.
Order.belongsTo(User)

//M:M Association between Cart and plant through the CartItem Model
Plant.belongsToMany(Cart, {through: CartItem})
Cart.belongsToMany(Plant, {through: CartItem})

//M:M Association between order and plant through the CartItem Model
Plant.belongsToMany(Order, {through: OrderItem})
Order.belongsToMany(Plant, {through: OrderItem})
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Plant,
  Order
}
