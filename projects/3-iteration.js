// ####################################
// ####### ----- Countdown ----- ######
// ####################################

function liftOff() {
  let count = 10
 
  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }
   
  alert('Lift Off!')
}

// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let numOfAttendees = 5
  let attendeeList = ''
  
  while (count < numOfAttendees) {
    let attendee = prompt()
    attendeeList = attendeeList + attendee
    attendeeList = attendeeList + ', '
    count = count + 1
  }
  
  alert(attendees) 
}

// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {

}

// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {

}

// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {

}