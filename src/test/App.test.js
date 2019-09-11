// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

// Custome file imports
import App from '../react/app.js'
import reducers from '../reducers'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

/// /////////////////////////////////////////////////
// T E S T S
/// /////////////////////////////////////////////////

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Provider store={store} ><App /></Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
