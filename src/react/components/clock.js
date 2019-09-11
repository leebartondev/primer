// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

// Custom file imports

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const INIT_STATE = { CURRENT_DATE: () => new Date() }
const CARD_TITLE_SIZE = 'display-1'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function Clock (props) {
  // Clock time
  const [date, setDate] = useState(INIT_STATE.CURRENT_DATE())

  // Lifecycle
  useEffect(() => {
    // Start clock time interval
    const clockInterval = setInterval(() => { setDate(new Date()) }, 1000)

    // Cleanup
    return () => clearInterval(clockInterval)
  })

  return (
    <Card.Title className={CARD_TITLE_SIZE}>
      {props.isVisible ? date.toLocaleTimeString() : null}
    </Card.Title>
  )
}

export default Clock
