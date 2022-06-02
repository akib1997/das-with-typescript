// Title : Find the Longest Word in a String

// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

// 1
function findLongestWordLength(str: string): number {
  let convertedArr = str.split(" ");
  let prevValue = 0;
  let currentValue = 0;

  for (let a = 0; a < convertedArr.length; a++) {
    currentValue = convertedArr[a].length;

    if (prevValue < currentValue) {
      prevValue = currentValue;
    }
  }
  return prevValue;
}

findLongestWordLength("The quick brown fox jumpedhtdutdttde over the lazy dog");

// 2//
function findLongestWordLength2(str: string): number {
  let strArr = str.split(" ");
  let bigLength: number[] = [];

  for (let i = 0; i < strArr.length; i++) {
    bigLength.push(strArr[i].length);
  }

  let sortLentgthArr = bigLength.sort((a, b) => a - b);

  return sortLentgthArr[sortLentgthArr.length - 1];
}

findLongestWordLength2("The quick brown fox jumped over the lazy dog");
