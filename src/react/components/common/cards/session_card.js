// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { Card } from 'react-bootstrap'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const LINK_STYLE = 'link session'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function SessionCard (props) {
  return (
    <Card bg={props.bg} text={(props.bg) ? 'white' : 'default'}>
      <Card.Header onClick={() => { props.click(props.index) }} className={LINK_STYLE}>{props.header}</Card.Header>
      <Card.Body>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
      {(props.footer) ? <Card.Footer>{props.footer}</Card.Footer> : null}
    </Card>
  )
}

export default SessionCard
