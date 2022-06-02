// Title : Boo who

// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who

function booWho(bool: boolean): boolean {
  if (typeof bool == "boolean") {
    return true;
  } else {
    return false;
  }
}

console.log(booWho(false));
