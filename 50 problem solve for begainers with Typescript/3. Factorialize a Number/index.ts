// Title : Factorialize a Number

// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.
// Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

function factorialize(num: number): number {
  let newNumber: number = 1;

  if (num <= 1) return 1;

  for (let a = newNumber; a <= num; a++) {
    newNumber = newNumber * a;
  }

  return num;
}

factorialize(5);
