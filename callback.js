//I will callback later

/*
function Display(some) {
  console.log(some);
  //document.getElementById("demo").innerHTML = some;
}

function Calculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = Calculator(5, 5);
Display(result);

*/

//The problem with the first example above, is that you have to call two functions to display the result.

//The problem with the second example, is that you cannot prevent the calculator function from displaying the result.

/*
function Display(some) {
  console.log(some);
}

function Calculator(num1, num2) {
  let sum = num1 + num2;
  Display(sum);
}

Calculator(5, 5);
*/

//Now it is time to bring in a callback.
//In the example above, Display is a called a callback function.

//It is passed to Calculator() as an argument.

function Display(some) {
  console.log(some);
}

function Calculator(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

Calculator(5, 5, Display);
