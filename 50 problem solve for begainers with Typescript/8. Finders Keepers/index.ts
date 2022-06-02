// Title : Finders Keepers

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

// Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

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
