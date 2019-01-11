//guest cart will render the Cart component which renders SinglePlant
//it will be a stateful component and manage it's own state

import React, {Component} from 'react'
import {connect} from 'react-redux'

export class GuestCart extends Component {
  constructor() {
    super()
    this.state = {
      cart: []
    }
  }
}
