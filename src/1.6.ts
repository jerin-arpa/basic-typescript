// Function in Typescript

/* 
In typescript there is 2 types of function
1. Normal Function
2. Arrow Function 
*/

// Normal Function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 5);

// Arrow Function
const addArrow = (num1: number, num2: number): number => num1 + num2;

// Object --> Function --> Method
const poorUser = {
  name: "Jerin",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};

const poorUser2 = {
  name: "Jerin",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

// Map in array
const arr: number[] = [1, 4, 10];

const newArray: number[] = arr.map((elem: number): number => elem * elem);
