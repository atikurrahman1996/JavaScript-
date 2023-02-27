var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
}, 0);

console.log(sum);
