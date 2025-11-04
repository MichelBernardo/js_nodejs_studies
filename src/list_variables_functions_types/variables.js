/*
1. Declare three different variables (one for each type: string, number, and boolean) and assign values to them.
Then, display the type of each variable in the console.
*/

let string_var = 'String';
let number_var = 15;
let bool_var = true;

console.log(string_var);
console.log(number_var);
console.log(bool_var);

console.log(typeof string_var);
console.log(typeof number_var);
console.log(typeof bool_var);

/*
2. Create two variables, one containing your first name and another containing your last name.
Then, combine them into a third variable using the + operator and into a fourth variable using template strings.
Finally, print the results in the console.
*/

let first_name = 'Chandler';
let last_name = 'Nascimento';

let option1 = first_name + ' ' + last_name;
let option2 = `${first_name} ${last_name}.`

console.log(option1);
console.log(option2);

/*
3. Declare two variables, one containing a number and the other a string.
Then, combine them into a third variable using template strings to form a sentence and display the result in the console.
*/

let user = 'Mike';
let age = 20;

let phrase_to_print = `${user} is ${age} years old.`;

console.log(phrase_to_print);

/*
4. Create a variable initialized with a value of any type, then reassign a new value to that variable.
Print both values in the console after assigning them.
*/

/*
5. Declare a variable using var outside a code block (for example, if) and another inside that block.
Try accessing those variables inside and outside the block using console.log and analyze the results.
Repeat the same process using let and compare with the previous results.
*/

/*
6. Declare a boolean variable that indicates whether it's raining and use it in a conditional structure (if) to display a message 
saying whether you need to take an umbrella or not, depending on the value of the variable.
*/