import React from 'react'

/**
 * COMPONENT
 */
export const SingleAddress = props => {
  const address = props.address

  return (
    <div>
      <div>
        <p>
          <button
            type="button"
            onClick={() => {
              props.removeAddress(address.id)
            }}
          >
            X
          </button>
          Recipient: {address.firstName} {address.lastName} <br />
          {address.firstLine} {address.secondLine}
          <br />
          {address.city}, {address.state} {address.zip}
        </p>
      </div>
    </div>
  )
}
