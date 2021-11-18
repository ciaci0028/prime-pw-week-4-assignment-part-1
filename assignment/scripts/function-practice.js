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

console.log( 
  `Who needs a calculator when we have functions?! What is 5 * 195 * 3974?`, 
  multiplyThree(5, 195, 3974) 
);


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
  if (letter === string.charAt(0) ) {
    return true;
  } // If the letter at the first spot is the same, it's true!
  else {
    return false;
  }
}
// Testing a few different options to make sure the code is working
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));
console.log("testing again, should be true", isFirstLetter("z", "zebra"));
console.log("one last test, should be false", isFirstLetter("r", "sasquash"));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0; // Starting with the sum variable at zero
  // TODO: loop to add items
  for ( x = 0; x < array.length; x++ ) {
    sum += array[x] ; 
  }  
  return sum;
}
// I'm going to start with an empty array and push numbers in it to test as I go.
mathArray = [];
mathArray.push(1);
console.log( `The current numbers are:`, mathArray );
console.log( `Testing with 1:`, sumAll( mathArray ) );
mathArray.push( 3 );
mathArray.push( 6 );
console.log( `I have pushed 3 & 6, current mathArray is:`, mathArray );
console.log( `the sum of which is:`, sumAll (mathArray )); 

// Now I'm going to test with a direct array
console.log( `the Sum of 10, 27, and 33 is:`, sumAll( [ 10, 27, 33 ] ) );

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveNumbers (array) {
  let positiveArray = []; 
  // created an empty array to push into
  console.log( `in positiveNumbers function` );
  for ( let number of array ){
    if ( number > 0) {
      positiveArray.push( number );
    }  // any number greater than 0 will be pushed into the empty positiveArray
  }
  return positiveArray;
}

let numbers = [ 1, 4, -6, 0, -8, 3 ]; 
// we should expect that 1, 4, and 3 get pushed into positiveArray
positiveNumbers( numbers );

console.log( `Here is the unchanged, old array:`, numbers );
console.log( `Here are the positive numbers from the old array:`, positiveNumbers( numbers ) );



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// On Edabit, I found a problem that asked to create a function that 
// finds the smallest and biggest number in an array of numbers and 
// lists them in that order. 
// I first needed to find code that found the minimum and maximum values.
// This can be done by using Math.min() or Math.max(). However,
// these only work on a list of numbers, not an array. So a helpful way
// to turn an array into a list is by using the spread (...) operator.
// So the code looks like this:

function minMax(arr) {
	return [ Math.min(...arr), Math.max(...arr) ]; 
}

let arr1 = [1, 2, 54, 7, 24];
let arr2 = [-5, -100, 0, 2343, 2, 565];
let arr3 = [1, 3, 4, 6, 78, 45, 67, 45];

console.log( `should get [1, 54]:`, minMax(arr1));
console.log( `should get [-100, 2343]:`, minMax(arr2));
console.log( `should get [1, 78]:`, minMax(arr3));
