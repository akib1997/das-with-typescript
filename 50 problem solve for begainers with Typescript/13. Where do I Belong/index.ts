// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

function getIndexToIns(arr: number[], num: number): number {
  let sortedArr = arr.sort((a, b) => a - b);

  if (arr.length < 1) {
    return 0;
  } else {
    for (let a = 0; a < sortedArr.length; a++) {
      if (sortedArr[a] >= num) {
        return a;
      }
    }
  }
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
