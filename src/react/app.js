// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Custom file imports
import Projects from './components/projects/projects.js'
import Project from './components/project/project.js'
import Session from './components/session/session.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const PATH_DEFAULT = '/'
const PATH_PROJECTS = '/projects'
const PATH_PROJECT = '/projects/:id'
const PATH_SESSION = PATH_PROJECT + '/session'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function App () {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={PATH_DEFAULT} component={Projects} />
        <Route exact path={PATH_PROJECTS} component={Projects} />
        <Route exact path={PATH_PROJECT} component={Project} />
        <Route exact path={PATH_SESSION} component={Session} />
        <Route component={Session} />
      </Switch>
    </Router>
  )
}

export default App
