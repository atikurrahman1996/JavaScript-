// Array.prototype.find()
/*
var numbers = [1, 2, 3, 4, 5, 6, 10];

var result = numbers.find(function (currentValue) {
  return currentValue > 4;
});

console.log(result);
*/

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  test() {
    console.log("hello world");
  }

  exampleFunction() {
    let array = [1, 2, 3];
    array.find(function () {
      this.test();
    }, this);
  }
}

let student = new Student("atik", 27);
student.exampleFunction();
