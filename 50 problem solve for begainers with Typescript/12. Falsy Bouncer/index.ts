// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

function bouncer(arr: any[]) {
  let newArr = [];

  for (let a = 0; a < arr.length; a++) {
    if (arr[a]) {
      newArr.push(arr[a]);
    }
  }
  console.log(newArr);
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
