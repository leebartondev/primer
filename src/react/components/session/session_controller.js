// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React, { useState } from 'react'
import { Col, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Custom file imports
import * as actions from '../../../actions'
import myStorage from '../../util/storage/myStorage.js'
import myLog from '../../util/myLog.js'
import Clock from '../clock.js'
import Timer from '../timer.js'
import ButtonController from './button_controller.js'
import TimerTotal from './timer_total.js'
import SessionDescription from './session_description.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

// Initial state values
const INIT_STATE = { EMPTY_ARRAY: [], STRING: '', BOOL: false }

// class values
const CARD_TEXT_CENTER = 'text-center'
const REMOVE_PADDING = 'remove-padding'

// Log object values
const LOG_TEXT = { START: 'Start Time', PAUSE: 'Paused At', RESUME: 'Resumed At', END: 'End Time' }
const LOG_VARIANT = { START: 'primary', PAUSE: 'warning', RESUME: 'info', END: 'secondary' }
const LOG_DATE_TIME = () => new Date().toLocaleTimeString()

// Paths
const PATH_PROJECT = id => `/projects/${id}`

/// /////////////////////////////////////////////////
// C O M P O N E N T  D E F I N I T I O N
/// /////////////////////////////////////////////////

function SessionController (props) {
  // Session states
  const [showSessionDesc, setShowSessionDesc] = useState(INIT_STATE.BOOL)

  // Start timer
  const startSessionTimer = () => {
    props.setTiming(true)
    props.addSessionLog(myLog.session(LOG_TEXT.START, LOG_DATE_TIME(), LOG_VARIANT.START))
  }

  // Pause timer
  const pauseSessionTimer = () => {
    props.setPaused(true)
    props.addSessionLog(myLog.session(LOG_TEXT.PAUSE, LOG_DATE_TIME(), LOG_VARIANT.PAUSE))
  }

  // Resume timer
  const resumeSessionTimer = () => {
    props.setPaused(false)
    props.addSessionLog(myLog.session(LOG_TEXT.RESUME, LOG_DATE_TIME(), LOG_VARIANT.RESUME))
  }

  // End session
  const endSession = () => {
    props.setPaused(true)
    props.setEnd(true)
    props.addSessionLog(myLog.session(LOG_TEXT.END, LOG_DATE_TIME(), LOG_VARIANT.END))
  }

  // Cancel end session
  const continueSession = () => {
    props.setEnd(false)
    props.setPaused(false)
    props.popSessionLog()
  }

  // Submit session
  const submitSession = desc => {
    props.setSessionDate()
    props.setSessionDesc(desc)
    myStorage.store.newSession({
      date: props.session.date,
      desc: desc,
      total: props.session.total,
      logs: props.session.logs,
      projectId: props.projectId
    })
    props.history.push(PATH_PROJECT(props.projectId))
  }

  return (
    <Col className={REMOVE_PADDING}>
      <Card className={CARD_TEXT_CENTER}>
        <Card.Body>
          <Clock isVisible={!props.timerState.timing} />
          <Timer isVisible={props.timerState.timing} isPaused={props.timerState.paused} />
          <ButtonController isTiming={props.timerState.timing} isPaused={props.timerState.paused}
            startTimer={startSessionTimer} pauseTimer={pauseSessionTimer}
            resumeTimer={resumeSessionTimer} endSession={endSession} />
          <TimerTotal isVisible={props.timerState.end && !showSessionDesc} showSessionDesc={setShowSessionDesc} continueSession={continueSession} />
          <SessionDescription isVisible={props.timerState.end && showSessionDesc} finish={desc => { submitSession(desc) }} />
        </Card.Body>
      </Card>
    </Col>
  )
}

function mapStateToProps ({ timerState, session }) {
  return { timerState, session }
}

export default connect(mapStateToProps, actions)(withRouter(SessionController))
