import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product/product.model';
import * as productsList from './productsList.json';

@Component({
  selector: 'app-products-list-pane',
  templateUrl: './products-list-pane.component.html',
  styleUrls: ['./products-list-pane.component.css']
})
export class ProductsListPaneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let productsListJson = Object.assign(({productsList}["productsList"] as any)).default;
    productsListJson["productsList"].forEach( obj => this.products.push(Object.assign(new Product(),obj)));
  }

  @Output() productsInCartToEmit = new EventEmitter<Product[]>();

  products:Product[] = [];

  productsInCart:Product[] = [];

  addToCart(productRecieved: Product) {
    console.log("Id of product recieved " + productRecieved.productId + productRecieved.productDescription);
    this.productsInCart.push(productRecieved);
    this.productsInCartToEmit.emit(this.productsInCart);
  }

}
