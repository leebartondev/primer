// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D  /  C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Require imports
import React from 'react'
import { Card } from 'react-bootstrap'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const CARD_TEXT_CENTER = 'text-center'
const CARD_TEXT_COLOR = 'white'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function LogCard (props) {
  return (
    <Card bg={props.bg} text={CARD_TEXT_COLOR} className={CARD_TEXT_CENTER}>
      <Card.Header>{props.header}</Card.Header>
      <Card.Body>{props.body}</Card.Body>
    </Card>
  )
}

export default LogCard
