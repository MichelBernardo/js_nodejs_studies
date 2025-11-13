/*
1. Create a variable containing a sentence. 
Then, display in the console the length of the sentence and the same sentence in uppercase letters.*/

console.log("--- Question 1 ---");

const sentence = "Just a random sentence for testing."

console.log(sentence.length);
console.log(sentence.toUpperCase());

/*
2. Declare two variables, one initialized with null and another with no assignment (resulting in undefined).
Display the values in the console.*/

console.log("--- Question 2 ---");

const null_var = null;
let empty_var;  // 'const' declarations must be initialized 

console.log(null_var);
console.log(empty_var);

/*
3. Create 3 variables of different types, use template strings to combine the different data types (number, string, boolean) into a 
single string, and display the result in the console.*/

console.log("--- Question 3 ---");

let name_test = 'Mike';
let height = 1.8;
let age = 25;

let concatanation = `name: ${name_test}\nheight: ${height}\nage: ${age} `;

console.log(concatanation);

/*
4. Create a numeric variable and a string.
Convert the numeric variable to a string and the string to a number.
Display the resulting data types in the console.*/

console.log("--- Question 4 ---");

let numeric_var = 15;
let string_var = '16';

numeric_var = numeric_var.toString();
string_var = parseInt(string_var);

console.log(`Variable: ${numeric_var} - type: ${typeof numeric_var}`);
console.log(`Variable: ${string_var} - type: ${typeof string_var}`);

/*
5. Create a variable with a string and use string manipulation methods such as toUpperCase, toLowerCase, slice, or others to modify the
original string. Display the final results in the console.
*/

console.log("--- Question 5 ---");

let test_var = 'OriginalString';

console.log(test_var.toUpperCase());
console.log(test_var.toLowerCase());
console.log(`${test_var.slice(0,8)} ${test_var.slice(8,)}`);