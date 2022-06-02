// Title : Confirm the Ending

// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

function confirmEnding(str: string, target: string): boolean {
  let counter = 0;

  for (let a = 1; a <= target.length; a++) {
    if (target[target.length - a] === str[str.length - a]) {
      counter++;
    }
  }

  if (counter === target.length) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Open sesaame", "same"));
