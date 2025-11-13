/*
1. Create a function that receives a person's name as an argument and returns a personalized greeting.
Then, call the function and display the greeting in the console.*/

console.log('=== Questao 1 ===');

function greeting(name){
    console.log(`Hi ${name}, nice to meet you!`);
}

greeting('Israelly');

/*
2. Create a function that receives a person's age and returns whether they are an adult (age >= 18).
Print the result in the console.*/

console.log('\n=== Questao 2 ===');

function isAdult(age){
    if(age >= 18){
        console.log('Of legal age');
    }else{
        console.log('Underage');
    }
}

isAdult(20);

/*
3. Create a function that receives a string and checks whether it is a palindrome (a word that reads the same backward and forward)
using the string reverse() method. Return true if it is a palindrome and false otherwise.
Print the result in the console.*/

console.log('\n=== Questao 3 ===');

function isPalindrome(word){
    if(word === word.split("").reverse().join("")){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome('Civic'));

/*
4. Create a function that receives three numbers as parameters and determines which one is the largest.
Use conditional structures (if, else) to compare the values and determine the largest.
Print the largest value in the console.*/

console.log('\n=== Questao 4 ===');

function LargestNumber(a,b,c){
    if(a > b){
        if(a > c){
            return a;
        }else{
            return c;
        }
    }else if(b > c){
        return b;
    }else{
        return c;
    }
}

console.log(LargestNumber(20,5,30));

/*
5. Create an arrow function called calculaPotencia that receives two parameters: the base and the exponent.
The function should calculate the base raised to the exponent and return the result.
*/

console.log('\n=== Questao 5 ===');

const calculaPotencia = (base, exponent) => {
    return base ** exponent;
};
