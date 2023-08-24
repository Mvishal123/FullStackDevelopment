// Type inference
// type NumArray = number[];

// const getFirst = (ls: NumArray): number => {
//     return ls[0];
// }

// const ls = [1,2,3,4,5,6,7];
// console.log(getFirst(ls));


// 
// type NewArr = number[] | string[];

// const getFirstNew = (ls: NewArr): number | string => {
//     return ls[0]
// }

// const ls1 = [1, 2, 3];
// const ls2 = ["one", "two", "three"]; 
// console.log(getFirstNew(ls1));
// console.log(getFirstNew(ls2));

// Generics
// const getFirstNew = <T>(ls: T[]): T => {
//     return ls[0]
// }

// const ls1 = [1, 2, 3];
// const ls2 = ["one", "two", "three"]; 
// console.log(getFirstNew(ls1));
// console.log(getFirstNew(ls2));

// Assignment-2 --> SWAP(Generics)
const swap = <X,Y>(a: X|Y, b: Y|X): [Y|X, Y|X] => {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

console.log(swap<number, string>("a", 2))



