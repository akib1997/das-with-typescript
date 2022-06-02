// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

function mutation(arr: string[]) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  let counter = 0;

  for (let a = 0; a < str2.length; a++) {
    for (let b = 0; b < str1.length; b++) {
      if (str2[a] === str1[b]) {
        counter++;
        break;
      }
    }
  }

  if (counter === str2.length) {
    return true;
  } else {
    return false;
  }
}

// console.log(mutation(["hello", "hel"]));
