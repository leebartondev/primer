// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Require imports
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap'

// Custom file imports
import * as actions from '../../../actions'
import myStorage from '../../util/storage/myStorage.js'
import PrimerCard from '../common/cards/primer_card.js'
import ProjectInfo from '../projects/project_info.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

// Styles
const CONTAINER_IS_FLUID = true
const TITLE_STYLE = 'title-margin'
const ROW_STYLE = { FLOAT: 'float right row-padding', PADDING: 'row-padding' }
const BUTTON_PRIMARY = 'primary'
const MAX_COLS = 4

// Text
const TITLE = 'Projects'
const DEFAULT_MESSAGE = 'No projects to display'
const CARD_BG = 'success'

// State
const INIT_STATE = { BOOL: false }

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function Projects (props) {
  // Projects view state
  const [getInput, setGetInput] = useState(INIT_STATE.BOOL)
  const projectsList = myStorage.get.arrayAsRows(props.projects.projects, MAX_COLS)

  // Create a new project
  const createProject = (title, desc) => {
    // Generate project id
    const projectId = myStorage.get.newProjectId()
    // Add project to store
    props.addProject({ id: projectId, title: title, desc: desc })
    // Store new project
    myStorage.store.newProject(projectId, title, desc)
    // Check if at least title was entered
    if (title) {
      setGetInput(false)
    }
  }

  const deleteProject = id => {
    console.log('Deleting Project: ' + id)
    // Remove project from storage
    myStorage.delete.projectById(id)
    // Update store
    props.removeProject(id)
  }

  return (
    <Container fluid={CONTAINER_IS_FLUID}>
      <h1 className={TITLE_STYLE}>{TITLE}</h1>
      {(projectsList.length)
        ? projectsList.map((row, index) =>
          <Row key={index} className={ROW_STYLE.PADDING}>
            {row.map((project, index) =>
              (project.id)
                ? <Col key={index}>
                  <PrimerCard key={index} bg={CARD_BG} id={project.id}
                    header={project.title} text={project.desc}
                    to={`/projects/${project.id}`} handler={id => { deleteProject(id) }} />
                </Col> : <Col key={index} />)}
          </Row>) : <p className={TITLE_STYLE}>{DEFAULT_MESSAGE}</p>}
      <Row className={ROW_STYLE.FLOAT}>
        <Col>
          <Button variant={BUTTON_PRIMARY} onClick={() => { setGetInput(true) }}> + New Project </Button>
        </Col>
      </Row>
      <ProjectInfo isVisible={getInput} setGetInput={setGetInput} createProject={createProject} />
    </Container>
  )
}

function mapStateToProps ({ projects }) {
  return { projects }
}

export default connect(mapStateToProps, actions)(Projects)
