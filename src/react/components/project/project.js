// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Require imports
import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

// Custom file imports
import myStorage from '../../util/storage/myStorage.js'
import SessionCard from '../common/cards/session_card.js'
import SessionSummary from './session_summary.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

// Initial state values
const INIT_STATE = { BOOL: false, OBJ: {} }

// Style
const CONTAINER_IS_FLUID = true
const TITLE_STYLE = 'title-margin'
const ROW_STYLE = { FLOAT: 'float right row-padding', PADDING: 'row-padding' }
const BUTTON = { SECONDARY: 'secondary', PRIMARY: 'primary' }
const BUTTON_MARGIN = 'btn-margin left'
const MAX_COLS = 4

// Text
const DEFAULT_MESSAGE = 'No sessions to display'
const CARD_BG = 'success'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function Project (props) {
  // Project states
  const [showSessionSummary, setShowSessionSummary] = useState(INIT_STATE.BOOL)
  const [sessionToSummarize, setSessionToSummarize] = useState(INIT_STATE.OBJ)

  // Get project information
  const project = myStorage.get.projectById(props.match.params.id)
  // Get sessions for current project as rows to display
  const sessionRows = myStorage.get.sessionsByProjectIdAsRows(project.id, MAX_COLS)
  // Get sessions for current project
  const sessions = myStorage.get.sessionsByProjectId(project.id)

  // Handle session link click (show modal)
  const handleSessionClick = index => {
    setSessionToSummarize(sessions[index])
    setShowSessionSummary(true)
  }

  return (
    <Container fluid={CONTAINER_IS_FLUID}>
      <h1 className={TITLE_STYLE}>{project.title}</h1>
      {(sessionRows.length)
        ? sessionRows.map((row, index) =>
          <Row key={index} className={ROW_STYLE.PADDING}>
            {row.map((session, index) =>
              (session.date)
                ? <Col key={index}>
                  <SessionCard key={index} bg={CARD_BG} header={session.date} index={index} click={i => { handleSessionClick(i) }} text={session.desc} footer={`Total: ${session.total}`} />
                </Col> : <Col key={index} />)}
          </Row>) : <p className={TITLE_STYLE}>{DEFAULT_MESSAGE}</p>}
      <Row className={ROW_STYLE.FLOAT}>
        <Col>
          <Button href={`/projects/${project.id}/session`} variant={BUTTON.PRIMARY}> + New Session </Button>
          <Button href={`/`} variant={BUTTON.SECONDARY} className={BUTTON_MARGIN}> Back </Button>
        </Col>
      </Row>
      <SessionSummary isVisible={showSessionSummary} session={sessionToSummarize} close={() => { setShowSessionSummary(false) }} />
    </Container>
  )
}

export default Project
