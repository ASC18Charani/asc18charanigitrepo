import {Product} from './products';
export class ProductManager {
    private product:Product[] = [];
    addProduct(product : Product):void {
    this.products.push(product);
    }
    listProducts():Product[] {
        return this.product;
    };
    removeProduct(id:number):void {
        this.products.push(product);
    }
    listProducts():Product[] {
        return this.products;
    };
    removeProduct(id:number):void {
        this.products = this.products.filter(product => product.id !==id);
        console.log("Product with id ${id}")
    }
}