// how to print 1-6 random numbers in playing lodo

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomNumber(1, 6));
