// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { Modal, Button } from 'react-bootstrap'

// Custom file imports
import Textarea from '../common/textarea.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const MODAL_TITLE = 'Session Description'
const BUTTON_TEXT = 'Finished'
const BUTTON_PRIMARY = 'primary'
const TEXTAREA_ROWS = '4'
const TEXTAREA_PLACEHOLDER = 'What did you do during this session?'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function SessionDescription (props) {
  // Session description init
  let sessionDesc = React.createRef()

  return (
    <Modal show={props.isVisible} size='lg' aria-labelledby='contained-modal-title-vcenter' centered >
      <Modal.Header><Modal.Title>{MODAL_TITLE}</Modal.Title></Modal.Header>
      <Modal.Body>
        <Textarea rows={TEXTAREA_ROWS} placeholder={TEXTAREA_PLACEHOLDER} inputRef={ref => { sessionDesc = ref }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant={BUTTON_PRIMARY} onClick={() => props.finish(sessionDesc.value)}>{BUTTON_TEXT}</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SessionDescription
