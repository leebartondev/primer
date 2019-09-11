// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

// Custom file imports
import './themes/minty.bootstrap.min.css'
import './themes/custom.css'
import App from './react/app.js'

// Create redux store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
