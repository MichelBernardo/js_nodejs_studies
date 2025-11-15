/*
1. A sparse array is a type of array in which most elements have undefined values.
Create a sparse array and assign values to some of the array's elements (for exemple, set values at indices 1, 3 and 7).
Print the array and its length information to the console.
*/

console.log("Question 1 ==========================================");

const sparse_array = [,,,,,,,,,];

sparse_array[1] = 1;
sparse_array[3] = 3;
sparse_array[7] = 7;

console.log(sparse_array);

/*
2. Create a Node.js program that starts with a five-element array and assigns a new value
to the first position (index 0) of that array. Then, display the array before and after the change.
*/

console.log("\nQuestion 2 ==========================================");

const array_five_elements = [1,2,3,4,5];
console.log(array_five_elements);

array_five_elements[0] = 6;
console.log(array_five_elements);

/* 
3. Create an empty array called myArray and add 3 integers of your choice using the push() method.
Print the items in the array to the console to verify that the numbers were added.
Then, replace the first element of the array (index 0) with twice its current value.
Print the updated array to the console to verify the change.
*/

console.log("\nQuestion 3 ==========================================");

const myArray = [];

myArray.push(1);
myArray.push(2);
myArray.push(3);

console.log(myArray);

myArray[0] = 2*myArray[0];

console.log(myArray);

/*
4. Develop a Node.js program that creates an empty array and assigns values to it using the push() method.
Add three integers to the array and then display the resulting array.
*/

console.log("\nQuestion 4 ==========================================");

const empty_array = [];

empty_array.push(4);
empty_array.push(8);
empty_array.push(10);

console.log(empty_array);

/*
5. Develop a Node.js program that simulates a veterinary clinic. Create an empty array called clinic to represent the
queue of animals at the clinic. Initially, simulate the arrival of three different animals and display the
list of animals in the console. After displaying the list, remove the animals from the list one at a time and, finally, 
display the final state of the list in the console.
*/

console.log("\nQuestion 5 ==========================================");

const clinic = [];

clinic.push('Cat');
clinic.push('Dog');
clinic.push('Pig');

console.log(clinic)

clinic.pop();

console.log(clinic)

for(let i = 0; i <= clinic.length; i++){
    clinic.pop();
    console.log(clinic);
}
