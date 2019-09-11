// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { Button } from 'react-bootstrap'

// Custom file imports
import getPrimaryButtonStyle from '../../util/styles/session_primary_button_style.js'
import getPrimaryButtonText from '../../util/text/session_primary_button_text.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

// Button values
const BUTTON_TEXT = { END: 'End Session' }
const BUTTON_VARIANT = { END: 'secondary' }

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function ButtonController (props) {
  // Button click
  const handleOnClick = () => {
    // Start session clicked
    if (!props.isTiming) {
      props.startTimer()
    } else if (props.isTiming && !props.isPaused) { // Pause session clicked
      props.pauseTimer()
    } else if (props.isTiming && props.isPaused) { // Resume session clicked
      props.resumeTimer()
    }
  }

  return (
    <div>
      <Button block variant={getPrimaryButtonStyle(props.isTiming, props.isPaused)} onClick={() => { handleOnClick() }}>
        {getPrimaryButtonText(props.isTiming, props.isPaused)}
      </Button>
      {props.isTiming
        ? <Button block variant={BUTTON_VARIANT.END} onClick={() => { props.endSession() }}>{BUTTON_TEXT.END}</Button>
        : null}
    </div>
  )
}

export default ButtonController
