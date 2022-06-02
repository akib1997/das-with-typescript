// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

function chunkArrayInGroups(arr, size) {
  let dimensionalArr = [];
  let newArr = [];
  let counter = 0;

  for (let a = 0; a < arr.length; a++) {
    if (counter == size - 1) {
      newArr.push(arr[a]);
      dimensionalArr.push(newArr);
      counter = 0;
      newArr = [];
    } else {
      counter++;
      newArr.push(arr[a]);
    }
  }

  if (counter > 0) {
    dimensionalArr.push(newArr);
  }

  return dimensionalArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
