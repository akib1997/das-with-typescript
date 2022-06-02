// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer<T>(arr: T[], ...args): T[] {
  let argArr = args;
  let newArr: T[] = [];

  for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < argArr.length; b++) {
      if (arr[a] === argArr[b]) {
        delete arr[a];
      }
    }
    if (arr[a]) {
      // Not undefined
      newArr.push(arr[a]);
    }
  }

  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
