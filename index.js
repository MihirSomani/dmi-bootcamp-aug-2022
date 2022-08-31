// map()
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = [];
values.forEach((value) => {
  result.push(value * 10);
});
console.log(result);

// pointer -> value
const obj = {
  fname: "Mihir",
};

obj.fname = "Something";

const original = [1, 2, 3];

for (let i = 0; i < 3; i++) {
  original[i] = original[i] * 10;
}

console.log(original);

// no mutatation - immutable
const resultWithMap = values.map((value) => value * 10);
console.log(values);
console.log(resultWithMap);

// filter()

const students = ["Student1", "Student2", "Student3", "Mihir"];

const newArray = students.filter((student) => student !== "Mihir");

console.log(newArray);

const costs = [1, 2, -1, -5, 3, 5, 10, 0];

const cleanedUpCosts = costs.filter((cost) => cost <= 0);
console.log(cleanedUpCosts);

// map & filter()

const numbers = [1, 2, 3, 4, 5];

console.log(
  numbers
    .filter((number) => number !== 2)
    .map((number) => number * 10)
    .map((number) => number * 100)
);

// reduce()
