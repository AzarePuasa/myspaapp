import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { PRODUCTS } from './mock-products';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor() { }

  //get all products
  getProducts(): Product[] {
    return PRODUCTS;
  }

  //get the Product with the specified id.
  getProduct(id: number){
    return PRODUCTS[id-1];
  }
}