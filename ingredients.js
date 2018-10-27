var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var arr = 0;
while (arr < ingredients.length) {
  console.log(ingredients[arr]);
  arr++;
}

// Write a for loop that prints out the contents of ingredients:

for (var arra = 0; arra < ingredients.length; arra++) {
  console.log(ingredients[arra]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
