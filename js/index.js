/* -------------------- HomeWork 1 task 1 ------------------------ */

// arrow Function

// const sayHello = (name) => {
//     if (name ==='Mark' || name === 'Victor') {
//         return `Hi, ${name}!`;
//     }
//     return `Hello, ${name}!`;
//  }

// function expression

// const sayHello = function(name) {
//     if (name ==='Mark' || name === 'Victor') {
//         return `Hi, ${name}!`;
//     }
//     return `Hello, ${name}!`;
// }

// console.log(sayHello('Peter'));
// console.log(sayHello('Mark'));
// console.log(sayHello('Alex'));
// console.log(sayHello('Victor'));

/* -------------------- HomeWork 1 task 2 ------------------------ */

// function expression

// const computeHipo = function(n,m) {
//     return (Math.sqrt(n**2 + m**2));
// }

// arrow Function

// const computeHipo = (n,m) => {
//     return (Math.sqrt(n**2 + m**2));
// }

// const computeHipo = (n,m) => Math.sqrt(n**2 + m**2);

// console.log(computeHipo(3,4));
// console.log(computeHipo(5,4));
// console.log(computeHipo(12,8));

/* -------------------- HomeWork 1 task 3 ------------------------ */

// function expression

// const min = function(a,b) {
//     if (a<=b) {
//         return (a);
//     }
//     if (b<a) {
//         return (b);
//     }
// }

// or

// const min = function(a,b) {
//     if (a<=b) {
//         return (a);
//     }
//     return (b);
// }

// or

// const min = function(a,b) {
//     return a<=b ? a : b;
// };

// arrow Function

// const min = (a,b) => {
//     return a<=b ? a : b;
// }

// or

// const min = (a,b) => a<=b ? a : b;

// console.log(min(2,5));
// console.log(min(3,-1));
// console.log(min(1,1));

/* -------------------- HomeWork 1 task 4 ------------------------ */

// function expression

// const isEven = function(i) {
// if (i % 2 === 0) {
//     return true;
// }
// return false;
// }

// or

// const isEven = function(i) {
//     return i % 2 === 0;
// }

// arrow Function

// const isEven = (i) => {
//     return (i % 2 === 0);
// }

// or

// const isEven = (i) => i % 2 === 0;

// console.log(isEven(6));
// console.log(isEven(7));
// console.log(isEven(10));
// console.log(isEven(15));

/* -------------------- HomeWork 1 task 5 ------------------------ */

// function expression

// const deleteChars = function(str) {
//     return str.slice(1, str.length - 1);
// };

// arrow Function

// const deleteChars = (str) => str.slice(1, str.length - 1);

// console.log(deleteChars("Hello World!"));

/* -------------------- HomeWork 1 task 6 ------------------------ */

// arrow Function

// const capitalize = (string) => {
//     const firstLetter = string[0].toUpperCase();
//     const restLetter = string.slice(1).toLowerCase();
//     return `${firstLetter}${restLetter}`;
// }

// function expression

// const capitalize = function (string) {
// 	const firstLetter = string[0].toUpperCase();
// 	const restLetter = string.slice(1).toLowerCase();
// 	return `${firstLetter}${restLetter}`;
// };

// console.log(capitalize("JavaScriPt"));


/* -------------------- HomeWork 1 task 9 ------------------------ */

// const stringCutter = (text, charsQuantity) => {
// 	if (text.length > charsQuantity) {
// 		return (`${text.slice(0, charsQuantity)}...`);
// 	} 
// 	return(text);
// }
// console.log(stringCutter('hello', 2));