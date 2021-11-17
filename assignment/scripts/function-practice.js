console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  console.log(name + " has showed up");
  return "Hello, " + name + "!";
} // Created function that logs when a new name/argument is added,
// it will announce that person's arrival, then return "Hello!"

// Remember to call the function to test
console.log("Testing helloName:", helloName("Sabrina"));
console.log(`Let's greet Daphne:`, helloName("Daphne"));
console.log(helloName("Ashley"));
helloName("Ben");
// Showing the difference between console logging or just dropping
// an assignment into the function directly.

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let answer = firstNumber + secondNumber;
  return answer;
  // Assigned the answer to equal the addition of the two variables,
  // and return the answer

  // return firstNumber + secondNumber;
}
console.log( `Let us do some addition! What is 23 plus 28?`, addNumbers(23, 28) );
console.log( `Math is so fun! Let's do it again! What is 213423 + 34234?`, addNumbers(213423, 34234) );

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  let answer = num1 * num2 * num3;
  return answer;
}

// Testing different problems to see how smart the computer is
console.log( `I always loved my times table! What is 9 * 4 * 3?`, multiplyThree(9, 4, 3) );
// I think the code looks really pretty like this (all on one line)

console.log( `Who needs a calculator when we have functions?! What is 5 * 195 * 3974?`, 
multiplyThree(5, 195, 3974) 
);
// But 'prettier' makes it look like this... 
// Which one is technically 'prettier' and better to use?!


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } //end of true
  else {
    return false;
  } //end of false
} // end of function

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log("isPositive - should say true", isPositive(3));
console.log("isPositive - should say false", isPositive(0));
console.log("isPositive - should say false", isPositive(-3));
// All options tested and passed! Wahoo!

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  console.log(`What is in the list?`, array);
  if (array.length > 0) {
    return array[array.length - 1];
  } // If the array has anything in it (meaning the indext count is greater than zero)
    // then it will return the last variable in the array
    else {
    return `undefined`;
  } // Otherwise, if there is nothing in the array, it will return 'undefined'
}
let favoriteAnimals = ["dog", "horse", "cat", "dolphin"];
console.log(`And the last of favoriteAnimals is:`, getLast(favoriteAnimals));
// Testing an array with variables

let emptyArray = [];
console.log(`But without anything in an emptyArray:`, getLast(emptyArray));
// Testing an empty array

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      console.log(`Sabrina has, in fact, lived in`, value);
      return true;
    } // This will match up if I have lived in a certain state (listed in array)
  }
  console.log(`Sabrina has lived many places, but never`, value);
  return false;
} // Otherwise, it's a state I haven't lived in and will return false

let testArray = ["California", "Minnesota", "Georgia", "Washington"];
console.log(find("Minnesota", testArray));
console.log(find("Alaska", testArray));
console.log(find("California", testArray));
console.log(find("Florida", testArray));
console.log(find("Washington", testArray));
console.log(find("Georgia", testArray));
console.log(find("New York", testArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0)) {
    return true;
  } else {
    return false;
  }
}
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));
console.log("testing again", isFirstLetter("z", "zebra"));
console.log("one last test", isFirstLetter("r", "sasquash"));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0;
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
