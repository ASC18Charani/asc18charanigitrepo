function add(a: number,b: number): number {
    return a+b;
}
const result = add(5,10);
console.log(result);

// function mul(a: number,b: number): number {
//     return a*b;
// }
// const result = mul(2,3);
// console.log(result);

// function mul(a: number,b: number): number {
//     return a*b;
// }
// const result = mul(5,10);
// console.log(result);


interface User {
    name: string;
    age: number;
    email: string;
}
const user: User = {
    name: "Charani",
    age: 21,
    email: "charani@gmail.com"
};
console.log(user);

function identity<T>(arg: T): T {
    return arg;
}

const num = identity<number>(11);
const str = identity<string>("Charani");

console.log(num);
console.log(str);

enum Direction {
    Up,
    Down,
    Left,
    Right
}

const leave = Direction.Up;
console.log(leave);
console.log(Direction[leave]);
console.log(Direction[3]);

enum Direction1 {
    Up = 0,
    Down,
    Left,
    Right
}
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
