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

// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech',
  room: 'Room 9',
  students: 150,
}

function showSubject() {
  alert(subject.name)
}

function changeSubject() {
  let newName = prompt()
  subject.name = newName
}

// #####################################
// ####### ----- Find a Pet ----- ######
// #####################################

let petRegister = [
  { name: 'Snuggles', type: 'cat', color: 'tabby' },
  { name: 'Socks', type: 'cat', color: 'black and white' },
  { name: 'Dogan', type: 'dog', color: 'brown' },
]

function petSearch() {
  let searchType = prompt()
  let searchResult = ''

  petRegister.forEach( (currentPet) => {
    if (currentPet.type == searchType) {
      searchResult += currentPet.name
    }
  })

  alert(searchResult)
}

// #####################################
// ##### ----- Pet Register ----- ######
// #####################################

function addPet() {
  /// get the new pet's name
  let newName = prompt()

  // create the new pet object
  let newPet = {
    name: newName,
  }

  // add the pet object to the register array
  petRegister = [
    ...petRegister,
    newPet,
  ]
}

function listPets() {
  // output all the pets
}