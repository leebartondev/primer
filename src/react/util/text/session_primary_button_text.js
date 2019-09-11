// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

// Button values
const BUTTON_TEXT = { START: 'Start Session', PAUSE: 'Pause Session', RESUME: 'Resume Session', END: 'End Session' }

/// /////////////////////////////////////////////////
// F U N C T I O N   D E F I N I T I O N
/// /////////////////////////////////////////////////

export default (isTiming, isPaused) => { return (isTiming ? (isPaused ? BUTTON_TEXT.RESUME : BUTTON_TEXT.PAUSE) : BUTTON_TEXT.START) }
