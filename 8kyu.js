// Function 1 - hello world
// Write a function "greet" that returns "hello world"
function greet( ){
  return "hello world!";
}


/* Your task is to create the functionisDivideBy (or is_divide_by) 
to check if an integer number is divisible by both integers a and b. */
function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0){
    return true;
  } else {
    return false;
  }
}

/* Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as 
intended (i.e. make the first character in the string "word" upper case).
Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will 
be from 1 character up to 10 characters, but will never be empty.
*/
function capitalizeWord(word) {
            let a = word[0].toUpperCase() + word.slice(1).toLowerCase();
            return a;
        } 
console.log(capitalizeWord('word'));



// Given a year, return the century it is in
function century(year) {
  let num = year / 100;  
  return Math.ceil(num);
}


// We need a function that can transform a number into a string
function numberToString(num) {
  let number = 67;
  let str = number.toString();
  return str;
}
OR
function numberToString(num) {
   return num.toString();
}



// Convert a Number to a String
var stringToNumber = function(str){
  return Number(str);
}
// 2nd way
var stringToNumber = function(str){
  return +str;
}


// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.





// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.










