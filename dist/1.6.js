"use strict";
// Function in Typescript
{
    /*
      In typescript there is 2 types of function
      1. Normal Function
      2. Arrow Function
  */
    // Normal Function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 5);
    // Arrow Function
    const addArrow = (num1, num2) => num1 + num2;
    // Object --> Function --> Method
    const poorUser = {
        name: "Jerin",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        },
    };
    const poorUser2 = {
        name: "Jerin",
        balance: 0,
        addBalance(balance) {
            return `My new balance is ${this.balance + balance}`;
        },
    };
    // Map in array
    const arr = [1, 4, 10];
    const newArray = arr.map((elem) => elem * elem);
}
