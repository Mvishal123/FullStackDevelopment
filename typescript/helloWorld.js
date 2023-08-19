"use strict";
// //-------------------VARIABLE------------------------
// let num: number = 12;
// // num = "Vishal" -------This can't be done
// let student: string = "Vishal";
// let orders: object = { pasta: 2, maggi: 1, pencil: 10 };
// //  functions
// const add = (a: number, b: number): number => {
//   return a + b;
// };
// // console.log(add(10, 20));
// // bsaic calculator function
// const calculate = (n1: number, n2: number, op: "sum" | "sub" | "div" | "mul"): number => {
//   switch (op) {
//     case "sum":
//       return n1 + n2;
//     case "sub":
//       return n1 - n2;
//     case "mul":
//       return n1 * n2;
//     case "div":
//       return n1 / n2;
//     default:
//       return -1;
//   }
// };
// console.log(calculate(10, 5, "mul"))
const add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(1, 2));
