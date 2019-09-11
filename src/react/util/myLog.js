// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'

// Custom file imports
import LogCard from '../components/common/log/log_card.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const KEY_TIMESTAMP = () => new Date().getTime()

/// /////////////////////////////////////////////////
// O B J E C T   D E F I N I T I O N
/// /////////////////////////////////////////////////

export default {
  // Session logging
  session: (header, body, bg) => {
    return <LogCard key={`${header}_${body}_${KEY_TIMESTAMP()}`} bg={bg} header={header} body={body} />
  }
}
