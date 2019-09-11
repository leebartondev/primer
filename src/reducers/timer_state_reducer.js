// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Custom file imports
import { SET_TIMING, SET_PAUSED, SET_END } from '../actions/types.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const INITIAL_STATE = { timing: false, paused: false, end: false }

/// /////////////////////////////////////////////////
// T I M E R   R E D U C E R   D E F I N T I O N
/// /////////////////////////////////////////////////

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TIMING:
      return Object.assign({}, state, { timing: action.payload })
    case SET_PAUSED:
      return Object.assign({}, state, { paused: action.payload })
    case SET_END:
      return Object.assign({}, state, { end: action.payload })
    default:
      return state
  }
}
