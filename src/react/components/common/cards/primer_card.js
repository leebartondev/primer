// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

// Custom file imports
import CloseIcon from '../close_icon.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const LINK_STYLE = 'link'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function PrimerCard (props) {
  return (
    <Card bg={props.bg} text={(props.bg) ? 'white' : 'default'}>
      <Card.Header>
        <Link to={props.to} className={LINK_STYLE}>{props.header}</Link>
        <CloseIcon onClick={() => props.handler(props.id)} />
      </Card.Header>
      <Card.Body>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
      {(props.footer) ? <Card.Footer>{props.footer}</Card.Footer> : null}
    </Card>
  )
}

export default PrimerCard
