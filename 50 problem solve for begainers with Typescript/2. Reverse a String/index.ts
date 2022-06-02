// Title : Reverse a String

// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.
// Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

1;

// OLD WEY
function reverseString(str: string): string {
  let newStr = "";

  for (let a = str.length - 1; a >= 0; a--) {
    newStr = newStr + str[a];
  }

  return newStr;
}

reverseString("hello");
