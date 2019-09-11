// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Custom file imports
import {
  SET_PROJECT_ID,
  SET_PROJECT_TITLE,
  SET_PROJECT_DESC
} from '../actions/types.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const INITIAL_STATE = { id: null, title: '', desc: '' }

/// /////////////////////////////////////////////////
// P R O J E C T   R E D U C E R   D E F I N T I O N
/// /////////////////////////////////////////////////

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PROJECT_ID:
      return Object.assign({}, state, { id: action.payload })
    case SET_PROJECT_TITLE:
      return Object.assign({}, state, { title: action.payload })
    case SET_PROJECT_DESC:
      return Object.assign({}, state, { desc: action.payload })
    default:
      return state
  }
}
