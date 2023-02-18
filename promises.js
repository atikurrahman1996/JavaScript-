// I promise a resul
function Display(some) {
  document.getElementById("demo").innerHTML = some;
}

let Promise = new Promise(function (Resolve, Reject) {
  let x = 0;

  // The producing code (this may take some time)

  if (x == 0) {
    Resolve("OK");
  } else {
    Reject("Error");
  }
});

Promise.then(
  function (value) {
    Display(value);
  },
  function (error) {
    Display(error);
  }
);
