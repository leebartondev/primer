// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React, { useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

// Custom file imports
import * as actions from '../../../actions'
import myLog from '../../util/myLog.js'
import Logs from '../common/log/logs.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const MODAL_TITLE = 'Session Summary'
const BUTTON_TEXT = 'Close'
const BUTTON_VARIANT = 'secondary'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function SessionSummary (props) {
  // Create log components
  useEffect(() => {
    if (props.isVisible) {
      for (const log of props.session.logs) {
        props.addSessionLog(myLog.session(log.props.header, log.props.body, log.props.bg))
      }
    }
  })

  // Clear session logs and close summary
  const closeSessionSummary = () => {
    props.clearSessionLogs()
    props.close()
  }

  return (
    <Modal show={props.isVisible} size='lg' aria-labelledby='contained-modal-title-vcenter' centered >
      <Modal.Header><Modal.Title>{MODAL_TITLE}</Modal.Title></Modal.Header>
      <Modal.Body>
        <p>{props.session.date}</p>
        <p>{props.session.desc}</p>
        <p>{props.session.total}</p>
        <Logs />
      </Modal.Body>
      <Modal.Footer>
        <Button variant={BUTTON_VARIANT} onClick={() => closeSessionSummary()}>{BUTTON_TEXT}</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default connect(null, actions)(SessionSummary)
