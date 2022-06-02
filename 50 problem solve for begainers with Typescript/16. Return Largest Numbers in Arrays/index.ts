// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

function largestOfFour(arr: number[][]): number[] {
  let newArr = [];

  for (let a = 0; a < arr.length; a++) {
    let current = 0;

    for (let b = 0; b < arr[a].length; b++) {
      if (b === 0) {
        current = arr[a][b];
      } else if (current < arr[a][b]) {
        current = arr[a][b];
      }
    }

    newArr.push(current);
  }

  console.log(newArr);

  return newArr;
}

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);
