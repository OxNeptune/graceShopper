import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import {StripeProvider} from 'react-stripe-elements'

// establishes socket connection
import './socket'

ReactDOM.render(
  <StripeProvider apiKey="pk_test_vdrVvAJM7MIAFB8S0dh6Q0Y8">
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </StripeProvider>,
  document.getElementById('app')
)
