/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UserHome} from './user-home'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserHome', () => {
  let userHome
  // let yourAddresses

  beforeEach(() => {
    userHome = shallow(<UserHome firstName="Cody" />)
  })

  it('renders the name in an h2', () => {
    expect(userHome.find('h2').text()).to.be.equal('Welcome, Cody')
  })

  // it('renders AddressList when "Your Adresses" button is clicked', () => {
  //   userHome.find('button').simulate('click')
  //   expect(yourAddresses.called).to.be.true;
  // })
})
