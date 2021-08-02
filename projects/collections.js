// ##################################
// ##### ----- Future Job ----- #####
// ##################################

const jobs = [
  'astronaut',
  'firefighter',
  'police officer',
  'judge',
]

function futureJob() {
  let index = 0

  alert('Your future job will be' + jobs[0])
}

// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
]

function addSubject() {
  let newSubject = 'Maths'

  // add a new subject to the end of the subjects array
  subjects.push(newSubject)
}

function removeSubject() {
  let index = 0

  // remove 1 subject at the index position of the subjects array
  subjects.splice(index, 1)
}

// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [
  1,
  100,
  1000,
  10000,
  1234567890,
]

function numberSearch() {
  let searchTarget = 1
  let searchResult = false
  
  numberArray.forEach( (currentNumber) => {
    if (currentNumber == searchTarget) {
      searchResult = true
    }
  })
}