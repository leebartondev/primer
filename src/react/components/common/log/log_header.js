// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Require imports
import React from 'react'
import { Card } from 'react-bootstrap'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function LogHeader (props) {
  return (
    <Card className={props.class}>
      <Card.Header><h5>{props.header}</h5></Card.Header>
    </Card>
  )
}

export default LogHeader
