/*
1. Create variables that store the value of the balance, deposit, and withdrawal of a bank account,
then perform addition and subtraction operations between them using a variable called operation,
considering the function of each variable created. Display the final results in the console.*/

console.log('--- Question 1 ---');

const balance = 1000;
const deposit = 150;
const withdrawal = 100;

let operation;

// Adition
operation = balance + deposit;
console.log(`Balance after the transaction: ${operation}`);

balance = operation;

// Subtraction
operation = balance - withdrawal;
console.log(`Balance after the transaction: ${operation}`);

balance = operation;

/*
2. Create a numeric variable with a value. Use a ternary operator to check whether this value is even or odd.
Display the result in the console.*/

console.log('\n--- Question 2 ---');

let numeric_var = 10;

if(numeric_var % 2 === 1){
    console.log(`${numeric_var} is even.`);
}else{
    console.log(`${numeric_var} is odd.`);
}

/*
3. Consider a situation where you are checking if a user is logged in and has admin permission to access a specific feature.
Use boolean variables to simulate these conditions and use the AND operator to verify if both are true.
*/

console.log('\n--- Question 3 ---');

let isAdm = true;
let isLogged = true;

if(isLogged && isAdm){
    console.log('The user is logged and is an admin user.');
}else{
    console.log('The user is not a admin user and/or is not logged.');
}

/*
4. Declare two boolean variables and use the OR operator to check if at least one of them is true.
Display the result in the console.
*/

console.log('\n--- Question 4 ---');

let var1 = true;
let var2 = false;

if(var1 || var2){
    console.log('At least one of the variables is true.');
}

/*
5. Imagine a system that determines whether a user is old enough to buy a ticket for a show.
Declare two variables that determine the minimum age required and the user’s age,
and use conditional structures (if, else) to determine if the user can make the purchase.
*/

console.log('\n--- Question 5 ---');

let age = 16;
let min_age = 18;

if(age < min_age){
    console.log('The user is not older enough.');
}else{
    console.log('Purchase successful');
}
