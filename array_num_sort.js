//how to clasified studnets roll numbers

const rollNumber = [1, 4, 6, 9, 10, 30, 40, 100, 111, 5, 25, 1000];
console.log(
  rollNumber.sort(function (a, b) {
    return b - a;
  })
);
