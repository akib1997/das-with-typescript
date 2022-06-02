// Title : Repeat a String Repeat a String

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

// Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str: string, num: number): string {
  let newStr = "";

  if (num < 1) {
    return "";
  } else {
    for (let a = 0; a < num; a++) {
      newStr = newStr + str;
    }
  }

  return newStr;
}

repeatStringNumTimes("abc", 1);

console.log(repeatStringNumTimes("abc", 0));
