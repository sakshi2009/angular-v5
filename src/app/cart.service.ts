
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({ providedIn: 'root' })
export class CartService {
  items: Product[] = [];
  constructor() {  
  }
  addToCartS(product: Product) {
    this.items.push(product);
    console.log(this.items);
  }
  getItemsS() {
    return this.items;
  }

  clearCartS() {
    this.items = [];
    return this.items;
  }
}
