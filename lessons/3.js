function lesson3() {
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