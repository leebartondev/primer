// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Custom file imports
import {
  SET_SESSION_DATE,
  SET_SESSION_DESC,
  SET_SESSION_TOTAL,
  ADD_SESSION_LOG,
  POP_SESSION_LOG,
  CLEAR_SESSION_LOGS,
  CLEAR_SESSION
} from '../actions/types.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const INITIAL_STATE = { date: new Date().toLocaleDateString(), desc: '', total: '', logs: [] }

/// /////////////////////////////////////////////////
// T I M E R   R E D U C E R   D E F I N T I O N
/// /////////////////////////////////////////////////

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SESSION_DATE:
      return Object.assign({}, state, { date: action.payload })
    case SET_SESSION_DESC:
      return Object.assign({}, state, { desc: action.payload })
    case SET_SESSION_TOTAL:
      return Object.assign({}, state, { total: action.payload })
    case ADD_SESSION_LOG:
      const tempAddLogs = [...state.logs]
      tempAddLogs.push(action.payload)
      return Object.assign({}, state, { logs: tempAddLogs })
    case POP_SESSION_LOG:
      const tempPopLogs = [...state.logs]
      tempPopLogs.pop()
      return Object.assign({}, state, { logs: tempPopLogs })
    case CLEAR_SESSION_LOGS:
      const tempClearedLogs = []
      return Object.assign({}, state, { logs: tempClearedLogs })
    case CLEAR_SESSION:
      return Object.assign({}, state, INITIAL_STATE)
    default:
      return state
  }
}
