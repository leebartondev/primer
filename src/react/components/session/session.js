// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Require imports
import React from 'react'
import { Container, Row } from 'react-bootstrap'

// Custom file imports
import SessionController from './session_controller.js'
import Logs from '../common/log/logs.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const CONTAINER_IS_FLUID = true
const REMOVE_PADDING = 'remove-padding'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function Session (props) {
  return (
    <Container fluid={CONTAINER_IS_FLUID} className={REMOVE_PADDING}>
      <Row className={REMOVE_PADDING}>
        <SessionController projectId={props.match.params.id} />
        <Logs />
      </Row>
    </Container>
  )
}

export default Session
