// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Custom file imports
import myStorage from '../react/util/storage/myStorage.js'
import {
  ADD_PROJECT,
  REMOVE_PROJECT
} from '../actions/types.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const INITIAL_STATE = { projects: myStorage.get.projects() }

/// /////////////////////////////////////////////////
// P R O J E C T S   R E D U C E R   D E F I N T I O N
/// /////////////////////////////////////////////////

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      const tempProjects = [...state.projects]
      tempProjects.push(action.payload)
      return Object.assign({}, state, { projects: tempProjects })
    case REMOVE_PROJECT:
      const tempProjectsRem = [...state.projects]
      const removedProj = tempProjectsRem.filter(proj => {
        return Number(proj.id) !== Number(action.payload)
      })
      return Object.assign({}, state, { projects: removedProj })
    default:
      return state
  }
}
