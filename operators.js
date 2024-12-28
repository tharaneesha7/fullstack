// 1. Assignment Operators
let a = 10;
console.log(a);  // 10 

a += 5;  
console.log(a);  // 15 

// 2. Unary Operators
let b = 7;
b++;
console.log(b);  // 8 

b--;
console.log(b);  // 7 

// 3. Arithmetic Operators
let c = 12;
let d = 4;
console.log(c * d);  // 48

console.log(c % d);  // 0 

// 4. Comparison Operators
let x = 20, y = 15;
console.log(x > y);  // true

console.log(x === '20');  // false 

// 5. Logical Operators
let p = true, q = false;
console.log(p && q);  // false

console.log(p || q);  // true

// 6. Ternary Operator
let age = 21;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);  // Adult

let score = 45;
let pass = (score >= 50) ? "Pass" : "Fail";
console.log(pass);  // Fail

// 7. Bitwise Operators
let m = 5, n = 3; 
console.log(m & n);  // 1

console.log(m | n);  // 7 

// 8. String Operators
let firstName = "Ashmita";
let lastName = "Roy";
console.log(firstName + " " + lastName);  // Ashmita Roy

let greeting = "Hello";
greeting += ", World!";
console.log(greeting);  // Hello, World!

// 9. Type Operators
let value = 42;
console.log(typeof value);  // number

console.log(typeof "JavaScript");  // string