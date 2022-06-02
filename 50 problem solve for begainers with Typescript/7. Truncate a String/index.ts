// Title : Truncate a String

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

function truncateString(str: string, num: number): string {
  let newString = "";

  if (str.length <= num) {
    return str;
  }

  for (let a = 0; a < num; a++) {
    newString = newString + str[a];
  }

  return (newString += "...");
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
