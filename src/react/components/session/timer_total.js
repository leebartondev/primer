// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'

// Custom file imports
import * as actions from '../../../actions'
import myTime from '../../util/myTime.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const MODAL_TITLE = 'Session Time'
const MODAL_DEFAULT_BODY = '< 1 second'

const CENTERED_TEXT = 'center-text'
const BUTTON_PRIMARY = 'primary'
const BUTTON_SECONDARY = 'secondary'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function TimerTotal (props) {
  //
  const totalTimeMessage = myTime.generateTotalSessionTimeMessage(myTime.convertToTimeArrayDays(props.timer.seconds))

  const handleDone = () => {
    props.showSessionDesc(true)
    props.setSessionTotal(totalTimeMessage)
  }

  return (
    <Modal show={props.isVisible} size='lg' aria-labelledby='contained-modal-title-vcenter' centered >
      <Modal.Header><Modal.Title>{MODAL_TITLE}</Modal.Title></Modal.Header>
      <Modal.Body>
        <h1 className={CENTERED_TEXT}>{totalTimeMessage || MODAL_DEFAULT_BODY}</h1>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={BUTTON_SECONDARY} onClick={() => { props.continueSession() }}> Continue Session </Button>
        <Button variant={BUTTON_PRIMARY} onClick={() => { handleDone() }}> Done </Button>
      </Modal.Footer>
    </Modal>
  )
}

function mapStateToProps ({ timer }) {
  return { timer }
}

export default connect(mapStateToProps, actions)(TimerTotal)
