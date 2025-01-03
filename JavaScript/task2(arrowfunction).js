//type1=>with single parameter
const square = n => n * n;
console.log(square(5)); 

//type2=>multiple parameter
const add = (a, b) => a + b;
console.log(add(3, 4)); 

//type3 =>without parameter
const greet = () => "Hello, World!";
console.log(greet()); 

//type4=>with return type
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

console.log(multiply(3, 5));


