function frankenSplice<T>(arr1: T[], arr2: T[], n: number): T[] {
  let newArr = arr2.slice();

  newArr.splice(n, 0, ...arr1);

  return newArr;
}

console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);
