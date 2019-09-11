// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import { combineReducers } from 'redux'

// Custom file imports
import timerReducer from './timer_reducer.js'
import timerStateReducer from './timer_state_reducer.js'
import projectsReducer from './projects_reducer.js'
import sessionReducer from './session_reducer.js'

/// /////////////////////////////////////////////////
// C O M B I N E   R E D U C E R S
/// /////////////////////////////////////////////////

export default combineReducers({
  timer: timerReducer,
  timerState: timerStateReducer,
  projects: projectsReducer,
  session: sessionReducer
})
