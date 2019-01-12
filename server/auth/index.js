const router = require('express').Router()
const User = require('../db/models/user')
const Cart = require('../db/models/cart')
const crypto = require('crypto')

module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.session.userid = user.id
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const reqBody = req.body

    //if the user is able to send any blank names or email to backend, will send back message
    if (
      reqBody.firstName === '' ||
      reqBody.lastName === '' ||
      reqBody.email === ''
    ) {
      res.status(401).send('All fields must be completed')
    }

    const user = await User.create({
      email: reqBody.email,
      password: reqBody.password,
      firstName: reqBody.firstName,
      lastName: reqBody.lastName
    })

    const blank = crypto
      .createHash('RSA-SHA256')
      .update('')
      .update(user.salt())
      .digest('hex')
    //Checks to see if pass word is blank in case it bypasses front end required field
    if (user.password() === blank) {
      res.status(401).send("Password can't be blank")
    }
    req.session.userid = user.id
    await Cart.create({userId: user.id})
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else if (err.errors[0].validatorName === 'isEmail') {
      res.status(401).send('Please enter a valid email.')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
