import React from 'react'

/**
 * COMPONENT
 */
export const SingleAddress = props => {
  const address = props
  console.log(address)

  return (
    <div>
      <div>
        <p>
          Recipient: {address.firstName} {address.lastName}
        </p>
        <p>{address.firstLine}</p>
        <p>{address.secondLine}</p>
        <p>
          {address.city}, {address.state} {address.zip}
        </p>
      </div>
    </div>
  )
}
