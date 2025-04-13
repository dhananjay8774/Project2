// Function to greet
function greet() {
  console.log("Welcome");
}
greet(); // Output: Welcome

// Function to add two numbers
function add() {
  let a = 1;
  let b = 5;
  let total = a + b;
  console.log("Sum:", total);
}
add(); // Output: Sum: 6

// Function to multiply two numbers
function mul(a, b) {
  return a * b;
}
let result = mul(2, 2);
console.log("Product:", result); // Output: Product: 4

// Function expression
let language = function () {
  console.log("BKL");
};
language(); // Output: BKL

// Arrow function
let college = () => {
  console.log("Parul University..");
};
college(); // Output: Parul University..

// Arrow function with parameter
let dept = (name) => {
  console.log("Department name is:", name);
};
dept("CSE - CS"); // Output: Department name is: CSE - CS
