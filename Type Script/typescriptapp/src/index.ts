console.log("hii");

console.log("Typeacript Features");


// static typing
function add(a: number,b: number): number {
    return a+b;
}

// Scrible
// function functionName(var: vartype,var1: vartype): returntype {
//     return ;
// }
// function functionName(var: vartype){

// }
// 

const result = add(5,10);
console.log(result);


// Classes and Interfaces
interface User {
    name: string;
    age: number;
    email: string;
}
const user: User = {
    name: "John Doe",
    age: 30,
    email: "john.deo@gmail.com"
};
console.log(user);


// Classes and Inheritance
class Animal {

    // private name :string;
    constructor(public name: string) {
        // this.name;
    }

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal  {
    constructor(public name: string) {
        super(name);
        console.log("Dog constructor called");
    }
    makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}
const animal = new Animal("Cat");
animal.makeSound();
const dog = new Dog("Buddy");
dog.makeSound();


// Generics
function identity<T>(arg: T): T {
    return arg;
}

const num = identity<number>(42);
const str = identity<string>("Hello");

console.log(num);
console.log(str);


// enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

const move = Direction.Up;
console.log(move);
console.log(Direction[move]);
console.log(Direction[1]);

enum Direction1 {
    Up = 1,
    Down,
    Left = 50,
    Right
}
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);


// Type Interface
let x = 10;
let y = "Hello";
let z: number;
z = 20;

let a: number = 10;
let b: string = "Hello";
let c: boolean = true;
let d: any = 10;
let e: any = "Hello";
let f: any = true;
let g: number[] = [1,2,3];
let h: string[] = ["Hello", "World"];
let i: boolean[] = [true, false];
let j: any[] = [1, "Hello", true];
let k: [string, number] = ["Hello", 10];
let l: object = {name: "Jhon", age: 30, emailIds: 
    {
        email:"asd@gmail.com",
    },
    preferences: ["sports", " music"]
};
// let m: object = { name: "Jhon", age: 30, email: "asd@gmail.com"};
console.log(`a: ${typeof a}`);
console.log(`b: ${typeof b}`);
console.log(`c: ${typeof c}`);
console.log(`d: ${typeof d}`);
console.log(`e: ${typeof e}`);
console.log(`f: ${typeof f}`);
console.log(`g: ${typeof g}`);
console.log(`h: ${typeof h}`);
console.log(`i: ${typeof i}`);
console.log(`j: ${typeof j}`);
console.log(`k: ${typeof k}`);
console.log(`l: ${typeof l}`);

console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);
console.log(`d: ${d}`);
console.log(`e: ${e}`);
console.log(`f: ${f}`);
console.log(`g: ${g}`);
console.log(`h: ${h}`);
console.log(`i: ${i}`);
console.log(`j: ${j}`);
console.log(`k: ${k}`);
console.log(`l: ${l}`);


// union
function printId(id: string | number) {
    console.log(id);
}
