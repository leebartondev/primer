// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

import React from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'

// Custome file imports
import LogHeader from './log_header.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const COL_SIZE = '3'
const CARD_TEXT_CENTER = 'text-center'
const REMOVE_PADDING = 'remove-padding'
const LOG_HEADER = 'Logs'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function Logs (props) {
  return (
    <Col lg={COL_SIZE} className={REMOVE_PADDING}>
      <LogHeader class={CARD_TEXT_CENTER} header={LOG_HEADER} />
      {props.session.logs}
    </Col>
  )
}

function mapStateToProps ({ session }) {
  return { session }
}

export default connect(mapStateToProps)(Logs)
