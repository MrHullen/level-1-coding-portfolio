function conversation() {
  alert('Welcome to my conversation program.')
  alert('Do you like cycling? Answer yes or no.')
  let answer = prompt()
  if (answer == 'yes') {
    alert("That's good - you will get very fit.")
  } else {
    alert('Perhaps you like some other sport.')
  }
  alert('Goodbye')
}

function mealPlanner() {
  alert('Meal planner.')
  alert('1. Chicken curry.')
  alert('2. Veggie lasagne.')
  alert('3. Burger and salad.')
  alert('Which of these meals is your favourite? (1, 2, or 3).')
  let answer = prompt()
  if (answer == '1') {
    alert('Chicken curry, coming up.')
  } else if (answer == '2') {
    alert('Veggie lasagne, coming up.')
  } else {
    alert('Burger and salad, coming up.')
  }
  alert('Enjoy!')
}