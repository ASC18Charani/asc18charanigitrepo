console.log("welcome to the projrct management system app");

import { ProductManager} from './productManager';
import {Product} from './products';
const productManager = new ProductManager();
const Products : Product = {
    id: 1,
    name: "chitra",
    email: "name@gmail.com",
    dob: new Date(3-12-2024),
    address: "String",
    beveragepreference: "String",
    gender: "String",
    meal: "String",
    payment: "String",
    slider: 50,
};

productManager.addProduct(Products);
let products : Product[] = productManager.listProducts();
console.log(products);  
const product2 : Product = {
    id: 2,
    name: "Dharani",
    email: "dharani@gmail.com",
    dob: new Date(13-12-2004),
    address: "Hyderabad",
    beveragepreference: "tea,coffee",
    gender: "female",
    meal: "nonveg",
    payment: "Cash",
    slider: 50,
};
productManager.addProduct(product2);
console.clear();
products = productManager.listProducts();
console.log(products);

productManager.removeProduct(1);
products = productManager.listProducts();
console.log(products);