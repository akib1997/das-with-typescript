function diffArray(arr1, arr2) {
  let newArr1 = arr1.sort((a, b) => a - b);
  let newArr2 = arr2.sort((a, b) => a - b);
  let newArr = [];

  for (let a = 0; a < arr1.length; a++) {
    for (let b = 0; b < arr2.length; b++) {
      if (newArr1[a] == newArr2[b]) {
        delete newArr2[b];
        delete newArr1[a];
      }
    }
  }
  newArr = newArr1.filter(Boolean).concat(newArr2.filter(Boolean));
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
