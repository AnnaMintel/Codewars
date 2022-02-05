// Function 1 - hello world.  Write a function "greet" that returns "hello world"
function greet( ){
  return "hello world!";
}


/* Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b. */
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
function toBinary(n){
  return Number(n.toString(2));
}


// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
  if (number % 2 == 0){
    return "Even";
  } else {
    return "Odd";
  }
}


// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
  let res = [];
  for (let i = 0; i < x.length; i++){
    if (x[i] < 5){
      res.push(0);
    } else {
      res.push(1);
    }
  }
  return res.join('');
}


// given an integer or a floating-point number, find its opposite

function opposite(number) {
  return number*(-1);
}


// remove the spaces from the string, then return the resultant string
function noSpace(x){
return x.replace(/\s+/g, '')
}


// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)
function simpleMultiplication(number) {
      if (number % 2 == 0){
    return number*8;
  } else {
    return number*9;
  }
}


// Write a function called repeatStr which repeats the given string string exactly n times
function repeatStr (n, s) {
  return s.repeat(n);
}


/* Create a function finalGrade, which calculates the final grade of a student depending on two parameters: 
a grade for the exam and a number of completed projects. */
function finalGrade (exam, projects) {
  let finalGrade = 0;
  if (exam > 90 && (exam <= 100) || projects > 10){
    return finalGrade = 100;
  } else if (exam > 75  && projects >= 5){
    return finalGrade = 90;
  } else if (exam > 50 && projects >= 2){
    return finalGrade = 75;
  } else {
    return finalGrade = 0;
  }
  
 
 // When provided with a number between 0-9, return it in words
 function switchItUp(number){
switch (number) {
  case 0:
    return 'Zero';
  case 1:
    return 'One';
  case 2:
    return 'Two';
  case 3:
    return 'Three';
  case 4:
    return 'Four';
 case 5:
    return 'Five';
 case 6:
    return 'Six';
 case 7:
    return 'Seven';
 case 8:
    return 'Eight';
 case 9:
    return 'Nine';
  default:
    return "Nothing to display";
}
}


/*You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.Note: only positive integers will be tested.*/
function otherAngle(a, b) {
  return 180 - (a+b);
}


/*You're writing code to control your town's traffic lights. 
You need a function to handle each change from green, to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the current state of the 
light and returns a string representing the state the light should change to. */
function updateLight(current) {
  if (current == 'green'){
    return 'yellow';
  } else if (current == 'yellow'){
    return 'red';
  } else if (current == 'red'){
    return 'green';
  }
}



/* You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total. */
function rentalCarCost(rentDays, sum) {
  sum = rentDays * 40; // 40$
  if (rentDays >= 7){
     return (sum - 50); // - 50$ from general rent sum
  } else if (rentDays >= 3){
      return (sum - 20); // - 20$ from general rent sum 
  } else {
    return sum;
  }
}

