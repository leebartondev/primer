// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Custom file imports
import * as actionTypes from './types.js'

/// /////////////////////////////////////////////////
// A C T I O N   C R E A T O R S
/// /////////////////////////////////////////////////

// Timer
export const incrementTimer = () => dispatch => { dispatch({ type: actionTypes.INCREMENT_TIMER }) }
export const resetTimer = () => dispatch => { dispatch({ type: actionTypes.RESET_TIMER }) }

// Timer State
export const setTiming = bool => dispatch => { dispatch({ type: actionTypes.SET_TIMING, payload: bool }) }
export const setPaused = bool => dispatch => { dispatch({ type: actionTypes.SET_PAUSED, payload: bool }) }
export const setEnd = bool => dispatch => { dispatch({ type: actionTypes.SET_END, payload: bool }) }
export const resetTimerState = () => dispatch => { dispatch({ type: actionTypes.RESET_TIMER_STATE }) }

// Projects
export const addProject = obj => dispatch => { dispatch({ type: actionTypes.ADD_PROJECT, payload: obj }) }
export const removeProject = id => dispatch => { dispatch({ type: actionTypes.REMOVE_PROJECT, payload: id }) }

// Project

// Session
export const setSessionDate = () => dispatch => { dispatch({ type: actionTypes.SET_SESSION_DATE, payload: new Date().toLocaleDateString() }) }
export const setSessionDesc = str => dispatch => { dispatch({ type: actionTypes.SET_SESSION_DESC, payload: str }) }
export const setSessionTotal = str => dispatch => { dispatch({ type: actionTypes.SET_SESSION_TOTAL, payload: str }) }
export const addSessionLog = log => dispatch => { dispatch({ type: actionTypes.ADD_SESSION_LOG, payload: log }) }
export const popSessionLog = () => dispatch => { dispatch({ type: actionTypes.POP_SESSION_LOG }) }
export const clearSessionLogs = () => dispatch => { dispatch({ type: actionTypes.CLEAR_SESSION_LOGS }) }
export const clearSession = () => dispatch => { dispatch({ type: actionTypes.CLEAR_SESSION }) }
