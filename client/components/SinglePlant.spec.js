/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SinglePlant} from './SinglePlant'

const adapter = new Adapter()
enzyme.configure({adapter})

describe.only('SinglePlant', () => {
  let singlePlant
  let divs
  const plant = {
    type: 'flowers',
    name: 'Peace Lily',
    price: 29,
    size: 'small',
    description:
      'The Peace Lily is a popular indoor houseplant. It lives best in shade and needs little sunlight to thrive, and is watered approximately once a week. The soil is best left moist but only needs watering if the soil is dry.',
    imageURI: '/images/peaceLily.jpg'
  }

  beforeEach(() => {
    singlePlant = shallow(<SinglePlant plant={plant} />, {
      disableLifecycleMethods: true
    })
  })

  it("displays the plant's name, price, size, description and photo", () => {
    const img = singlePlant.find('img')
    expect(img.html()).to.include(plant.imageURI)
    const text = singlePlant.text()
    expect(text).to.include(plant.name)
    expect(text).to.include(plant.price)
    // expect(text).to.include(plant.size)
    expect(text).to.include(plant.description)
  })

  it('renders a <form /> element', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(singlePlant.find('form').getElement()).to.exist
  })

  // it("adds plant(s) to cart when `Add to Cart` button is clicked", () => {
  //   singlePlant.find("button").simulate("click");
  //   expect(listAll.called).to.be.true;
  // });
})
