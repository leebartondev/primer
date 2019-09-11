// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'

// Custom file imports
import * as actions from '../../actions'
import myTime from '../util/myTime.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const INIT_STATE = { TIMER: ['00', '00', '00', '00'] }
const CARD_TITLE_SIZE = 'display-1'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function Timer (props) {
  // Timer display
  const [timer, setTimer] = useState(INIT_STATE.TIMER)

  // Lifecycle
  useEffect(() => {
    // Start timer interval
    let timerInterval = null
    if (props.isVisible) {
      timerInterval = setInterval(() => {
        if (!props.isPaused) {
          props.incrementTimer()
          setTimer(myTime.convertToTimeArrayHours(props.timer.seconds + 1))
        }
      }, 1000)
    }

    // Cleanup
    return () => clearInterval(timerInterval)
  })

  return (
    <Card.Title className={CARD_TITLE_SIZE}>
      {props.isVisible ? `${timer[0]}:${timer[1]}:${timer[2]}` : null}
    </Card.Title>
  )
}

function mapStateToProps ({ timer }) {
  return { timer }
}

export default connect(mapStateToProps, actions)(Timer)
