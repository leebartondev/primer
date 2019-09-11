// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const KEYS = { SESSIONS: 'sessions', PROJECTS: 'projects' }

/// /////////////////////////////////////////////////
// O B J E C T   D E F I N I T I O N
/// /////////////////////////////////////////////////
// window.localStorage.removeItem('sessions')
export default {
  // Store functionality to local storage
  store: {
    // Store a new completed session to local storage
    newSession: (obj) => {
      const currentSessionsList = JSON.parse(window.localStorage.getItem(KEYS.SESSIONS)) || []
      currentSessionsList.push(obj)
      window.localStorage.setItem(KEYS.SESSIONS, JSON.stringify(currentSessionsList))
    },

    // Store a new project to local storage
    newProject: (projectId, projectTitle, projectDesc) => {
      const currentProjectsList = JSON.parse(window.localStorage.getItem(KEYS.PROJECTS)) || []
      currentProjectsList.push({
        id: projectId,
        title: projectTitle,
        desc: projectDesc
      })
      window.localStorage.setItem(KEYS.PROJECTS, JSON.stringify(currentProjectsList))
    }
  },

  // Read functionality from local storage
  get: {
    // Get all existing projects in local storage
    projects: () => JSON.parse(window.localStorage.getItem(KEYS.PROJECTS)) || [],

    // Project by id
    projectById: id => {
      // Get all projects
      const projects = JSON.parse(window.localStorage.getItem(KEYS.PROJECTS)) || []
      // Return appropriate project matching id
      for (const project of projects) {
        if (Number(project.id) === Number(id)) {
          return project // Project found
        }
      }
      // Project not found
      return null
    },

    // Generate a project id for a new project
    newProjectId: () => new Date().getTime(),

    // Get all existing sessions in local storage
    sessions: () => JSON.parse(window.localStorage.getItem(KEYS.SESSIONS)),

    // Get all existing sessions of a specific project by id
    sessionsByProjectId: id => {
      return getSessionsOfProject(id)
    },

    // Get all existing sessions of a specific project in max columns
    sessionsByProjectIdAsRows: (id, cols) => {
      const sessions = getSessionsOfProject(id)
      return arrayToRows(sessions, cols)
    },

    // Get all existing sessions in max columns
    sessionsAsRows: (cols) => {
      const sessions = JSON.parse(window.localStorage.getItem(KEYS.SESSIONS)) || []
      return arrayToRows(sessions, cols)
    },

    // Get any array of objects in max columns
    arrayAsRows: (arr, cols) => {
      // Check count vs max columns
      return arrayToRows(arr, cols)
    }
  },

  // Delete functionality from local storage
  delete: {
    // Delete project by id
    projectById: id => {
      // Get all projects
      const projects = JSON.parse(window.localStorage.getItem(KEYS.PROJECTS)) || []

      // Create a new array without specified project
      const projRemoved = projects.filter(proj => {
        return Number(proj.id) !== Number(id)
      })

      // Set new projects array to localStorage
      window.localStorage.setItem(KEYS.PROJECTS, JSON.stringify(projRemoved))

      // Delete all sesions associated with project
      // Get all sessions
      const sessions = JSON.parse(window.localStorage.getItem(KEYS.SESSIONS)) || []

      // Create a new array without specified sessions
      const sessionsRemoved = sessions.filter(session => {
        return Number(id) !== Number(session.projectId)
      })

      // Set new sessions array to localStorage
      window.localStorage.setItem(KEYS.SESSIONS, JSON.stringify(sessionsRemoved))
    }
  }
}

/// /////////////////////////////////////////////////
// L O C A L   U T I L   F U N C T I O N S
/// /////////////////////////////////////////////////

// Retrieve sessions from project id
function getSessionsOfProject (id) {
  // Get all sessions
  const sessions = JSON.parse(window.localStorage.getItem(KEYS.SESSIONS)) || []
  // Create array of matching sessions
  const projSessions = []
  for (const session of sessions) {
    if (Number(session.projectId) === Number(id)) {
      projSessions.push(session)
    }
  }
  // Any project sessions found
  return projSessions
}

// Convert array to rows in specified amount of columns
function arrayToRows (arr, cols) {
  if (arr.length === 0) { return [] }
  // Init rows
  const rows = []
  let currentRow = []
  // Check length vs max columns
  if (cols >= arr.length) {
    currentRow = arr
  } else { // Create rows
    arr.forEach((obj, index) => {
      // Add obj to row
      currentRow.push(obj)
      // Check if max columns reached
      if (((index + 1) % cols) === 0) {
        rows.push(currentRow) // Add row
        currentRow = [] // Reset row
      }
    })
  }
  // Fill last row with empty columns if necessary
  if (currentRow.length < cols) {
    const count = cols - currentRow.length
    for (let i = 0; i < count; i++) {
      currentRow.push({})
    }
  }
  rows.push(currentRow) // Add last row
  return rows
}
