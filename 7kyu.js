// Determine the area of the largest square that can fit inside a circle with radius r
function areaLargestSquare(r) {
  return (r * (r*2));
}


/* Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 
66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows. */
function digits(n) {
  return n.toString().length;
}

/* Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */
function removeChar(str) {
            return str.slice(1, -1);
        };
        
        
      
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)










