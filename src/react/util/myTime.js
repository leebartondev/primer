// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// O B J E C T   D E F I N I T I O N S
/// /////////////////////////////////////////////////

export default {

  // Convert seconds to array of days, hours, minutes,
  // seconds: [DD, HH, MM, SS]
  convertToTimeArrayDays: secs => {
    const arry = []
    let days = Math.floor((secs / (60 * 60 * 24))) // Days
    let hrs = Math.floor((secs / (60 * 60)) % 24) // Hours
    let mins = Math.floor((secs / 60) % 60) // Minutes
    secs = Math.floor(secs % 60) // Seconds

    if (days < 10) { days = `0${days}` }
    if (hrs < 10) { hrs = `0${hrs}` }
    if (mins < 10) { mins = `0${mins}` }
    if (secs < 10) { secs = `0${secs}` }

    arry.push(days)
    arry.push(hrs)
    arry.push(mins)
    arry.push(secs)

    return arry
  },

  // Convert seconds to array of hours, minutes,
  // seconds: [HH, MM, SS]
  convertToTimeArrayHours: secs => {
    const arry = []
    let hrs = Math.floor(secs / (60 * 60)) // Hours
    let mins = Math.floor((secs / 60) % 60) // Minutes
    secs = Math.floor(secs % 60) // Seconds

    if (hrs < 10) { hrs = `0${hrs}` }
    if (mins < 10) { mins = `0${mins}` }
    if (secs < 10) { secs = `0${secs}` }

    arry.push(hrs)
    arry.push(mins)
    arry.push(secs)

    return arry
  },

  // Convert timer array
  // Accepts both array up to days or hours
  generateTotalSessionTimeMessage: timer => {
    let timerMessage = ''
    // Check if days included
    if (timer.length === 4) {
      // Check days
      timerMessage += ((Number(timer[0]) > 0) ? ((Number(timer[0]) > 1) ? `${Number(timer[0])} days ` : `${Number(timer[0])} day `) : ``) // Days
      // Check hours
      timerMessage += ((Number(timer[1]) > 0) ? ((Number(timer[1]) > 1) ? `${Number(timer[1])} hours ` : `${Number(timer[1])} hour `) : ``) // Hours
      // Check mins
      timerMessage += ((Number(timer[2]) > 0) ? ((Number(timer[2]) > 1) ? `${Number(timer[2])} minutes ` : `${Number(timer[2])} minute `) : ``) // Minutes
      // Check secs
      timerMessage += ((Number(timer[3]) > 0) ? ((Number(timer[3]) > 1) ? `${Number(timer[3])} seconds ` : `${Number(timer[3])} second `) : ``) // Seconds
    } else {
      // Check hours
      timerMessage += ((Number(timer[0]) > 0) ? ((Number(timer[0]) > 1) ? `${Number(timer[0])} hours ` : `${Number(timer[0])} hour `) : ``) // Hours
      // Check mins
      timerMessage += ((Number(timer[1]) > 0) ? ((Number(timer[1]) > 1) ? `${Number(timer[1])} minutes ` : `${Number(timer[1])} minute `) : ``) // Minutes
      // Check secs
      timerMessage += ((Number(timer[2]) > 0) ? ((Number(timer[2]) > 1) ? `${Number(timer[2])} seconds ` : `${Number(timer[2])} second `) : ``) // Seconds
    }
    return timerMessage
  }
}
