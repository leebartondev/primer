// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

// Button values
const BUTTON_VARIANT = { START: 'primary', PAUSE: 'warning', RESUME: 'info', VARIANT: 'secondary' }

/// /////////////////////////////////////////////////
// F U N C T I O N   D E F I N I T I O N
/// /////////////////////////////////////////////////

export default (isTiming, isPaused) => { return (isTiming ? (isPaused ? BUTTON_VARIANT.RESUME : BUTTON_VARIANT.PAUSE) : BUTTON_VARIANT.START) }
