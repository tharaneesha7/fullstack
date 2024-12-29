// Task-1

const n=5
if(n & 1 === 0)
{
    console.log(n," is Even");
}
if(n & 1 === 1)
{
    console.log(n," is Odd");
}

// Task-2

// 1. With Parameter with return type

const var1=(a,b)=> a*b;
console.log(var1(4,3))

// 2. With Parameter without return type

const var2=(a,b)=>console.log("Addition of two numbers : ",a+b);
var2(2,5)

// 3. Without Parameter with return type

const var3=()=> new Date().toLocaleTimeString();
console.log(var3())

// 4. Without Parameter without return type

const var4=()=>console.log("Life is not merely to breath.");
var4()

// Task-3

const sum = (...numbers) => {
    console.log(numbers);
};

fun(1, 2, 3)       // 6
fun(5, 10, 15, 20) // 50
sum()              // 0

// Task-4

const process = (num, callback) => {
    console.log("Processing number...");
    callback(num);
};
const display = (result) => {
    console.log(`Result: ${result}`);
};
process(5, display);