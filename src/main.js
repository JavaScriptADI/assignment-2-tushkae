// 1) Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. 
// Print the variable to the console.
let str = prompt("Enter some string:");
while(str.length < 6) {
    str = prompt("Your entered string was short. Make sure that characters are at least 6 long:");
}
console.log(str);

// 2) What is the difference between "5" and 5?
let variable1 = "5";
let variable2 = 5;
// variable1 is a string with value of 5 and variable2 is number with value of 5

// 3) Declare a variable and assign a number as a value. Make sure the number is greater than 9. Print the variable to the console.
let number = Number(prompt("Enter number. Number should be greater than 9:"));
while(number <= 9) {
    number = Number(prompt("You entered number lower or equal to 9. Number should be greater than 9:"));
}
console.log(number);

// 4) Declare a variable and assign a boolean as a value. Print the variable to the console.
let bool = true;
console.log(bool);

// 5) What operators give us a boolean result?
// Answer: Logical oeprators like ||(or); &&(and); The equality operators (==, !=, ===, !==) and comparison operators (<, >).

// 6) Declare a variable with the value of "Hello". Convert the value to upper case and print the converted value to the console.
let hello = "Hello";
hello = hello.toUpperCase();
console.log(hello);

// 7) Declare another variable with the value of "World". Convert the value to lower case and print the converted value to the console.
let world = "World";
world = world.toLowerCase();
console.log(world);

// 😎 Given code:
// let text = 'Hello';
// text.toUpperCase();
// console.log(text);
// What is the value of the variable text before and after the method is called?
// Answer: before method call value is Hello and after method call value will be HELLO.

// 9) Given code:
// let text;
// console.log(text);
// What is the value of the variable text
// text is declared, but it doesnt have value. So value will be undefined.

// 10) Find an error in the following code:
// let text = 'Hello';
// console.log(text.toLowercase());
// Answer: syntax error on toLowerCase() method. It should be toLowerCase(); "C" in uppercase.

// 11) Find and fix the error in the following code:
// let age = prompt('How old are you?');
// let nextAge = age + 1;
// console.log(Next year you will be ${nextAge});
let age1 = prompt('How old are you?');
let nextAge = parseInt(age1) + 1;
console.log(`Next year you will be ${nextAge}`);

// 12) Finish the code:
let name = prompt('What is your name?');
let age = Number(prompt('How old are you?'));
let isInSixties = age >= 60 && age <70; // finish the code so that it prints true if the age is in 60s
console.log(`${name} is in sixties: ${isInSixties}`);

// 13) What is the value of x?
let x = 5;
console.log(x++);
console.log(x);
// Answer: x value will be 5.

// 14) What is the value of y?
let y = 5;
console.log(++y);
console.log(y);
// Answer: y value will be 5.

// 15) What is x++ and x--
// Answer: x++ is example of increment by one and y-- is example of decrement by one

// 16) What is the difference between ++x and x++?
// Answer: Pre-Increment (++x) the variable is incremented first, and then the updated value. Post-Increment (x++) The variable's current value is used first, and then the increment occurs.

// 17) If we try to declare variable without any value, what will be the value of the variable in the console?
// Answer: undefined.

// 18) Show the example of equality operator.
// Answer: ==

// 19) Show the example of not equal operator.
// Answer: !=

// 20) What's going on when we try to add string and number?
// Answer: string concatenation