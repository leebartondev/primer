// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { Modal, Button } from 'react-bootstrap'

// Custom file imports
import Text from '../common/text.js'
import Textarea from '../common/textarea.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const MODAL_TITLE = 'Project Information'
const BUTTON_TEXT = { CREATE: 'Create', CANCEL: 'Cancel' }
const BUTTON_VARIANT = { PRIMARY: 'primary', SECONDARY: 'secondary' }
const TEXTAREA_ROWS = '4'
const TEXTAREA_PLACEHOLDER = 'What is this project?'
const TEXT_PLACEHOLDER = 'Project Title'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function ProjectInfo (props) {
  // Session description init
  let projectTitle = React.createRef()
  let projectDesc = React.createRef()

  return (
    <Modal show={props.isVisible} size='lg' aria-labelledby='contained-modal-title-vcenter' centered >
      <Modal.Header><Modal.Title>{MODAL_TITLE}</Modal.Title></Modal.Header>
      <Modal.Body>
        <Text placeholder={TEXT_PLACEHOLDER} inputRef={ref => { projectTitle = ref }} />
        <Textarea rows={TEXTAREA_ROWS} placeholder={TEXTAREA_PLACEHOLDER} inputRef={ref => { projectDesc = ref }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant={BUTTON_VARIANT.SECONDARY} onClick={() => props.setGetInput(false)}>{BUTTON_TEXT.CANCEL}</Button>
        <Button variant={BUTTON_VARIANT.PRIMARY} onClick={() => props.createProject(projectTitle.value, projectDesc.value)}>{BUTTON_TEXT.CREATE}</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectInfo
