/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {PlantList} from './PlantList'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('PlantList', () => {
  let plantList
  let divs
  const plants = [
    {
      type: 'flowers',
      name: 'Peace Lily',
      price: 29,
      size: 'small',
      description:
        'The Peace Lily is a popular indoor houseplant. It lives best in shade and needs little sunlight to thrive, and is watered approximately once a week. The soil is best left moist but only needs watering if the soil is dry.',
      imageURI: '/images/peaceLily.jpg'
    },
    {
      type: 'flowers',
      name: 'Sunflower',
      price: 29,
      size: 'medium',
      description:
        'Sunflowers are usually tall annual or perennial plants that in some species can grow to a height of 300 cm (120 in) or more. They bear one or more wide, terminal capitula (flower heads), with bright yellow ray florets at the outside and yellow or maroon (also known as a brown/red) disc florets inside.',
      imageURI: '/images/sunflower.jpg'
    }
  ]

  beforeEach(() => {
    plantList = shallow(<PlantList plants={plants} />, {
      disableLifecycleMethods: true
    })
    divs = plantList.find('div.plant-card')
  })

  it('renders a header in an h1', () => {
    expect(plantList.find('h1').text()).to.be.equal(
      'Turn Over A New Leaf in 2019'
    )
  })

  it('renders DIVs with each plant', () => {
    expect(divs).to.have.length(plants.length)
    plants.forEach(plant => {
      const matchingDiv = divs.filterWhere(div => div.text() === plant.name)
      // expect(matchingDiv).to.exist
    })
  })
})
