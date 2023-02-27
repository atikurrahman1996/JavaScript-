/*
const user = {
  id: 112,
  name: "Atik",
  age: 27,
};

const { name } = user;
console.log(name);

//const { name: title } = user;
//console.log(title);  */

//nested object

const user = {
  id: 112,
  name: "Atik",
  age: 27,
  education: {
    degree: "Masters",
  },
};

const {
  education: { degree },
} = user;
console.log(degree);
