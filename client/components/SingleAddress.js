import React from 'react'

/**
 * COMPONENT
 */
const SingleAddress = props => {
  const address = props.address

  return (
    <div>
      <div>
        <p>
          Recipient: {address.firstName} {address.lastName} <br />
          {address.firstLine}
          <br />
          {address.secondLine}
          <br />
          {address.city}, {address.state} {address.zip}
        </p>
      </div>
    </div>
  )
}

export default SingleAddress
