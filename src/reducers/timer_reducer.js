// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Custom file imports
import { INCREMENT_TIMER, RESET_TIMER } from '../actions/types.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const INITIAL_STATE = { seconds: 0 }

/// /////////////////////////////////////////////////
// T I M E R   R E D U C E R   D E F I N T I O N
/// /////////////////////////////////////////////////

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_TIMER:
      return Object.assign({}, state, { seconds: state.seconds + 1 })
    case RESET_TIMER:
      return Object.assign({}, state, INITIAL_STATE)
    default:
      return state
  }
}
