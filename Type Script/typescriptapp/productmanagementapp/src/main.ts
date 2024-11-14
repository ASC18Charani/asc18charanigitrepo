console.log("welcome to the projrct management system app");

import { ProductManager} from './productManager';
import {Product} from './product';
const productManager = new ProductManager();
const product : Product = {
    id: 1,
    name: "Charani",
    email: "charani@gmail.com",
    dob: new Date(23-5-2003),
    address: "Hyderabad",
    beveragepreference: "tea,coffee",
    gender: "female",
    meal: "nonveg",
    payment: "Cash",
    slider: 50,
};

productManager.addProduct(product);
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