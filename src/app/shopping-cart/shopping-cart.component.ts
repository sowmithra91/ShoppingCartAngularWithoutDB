import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() productsInCart: Product[];

  errorMessage:String ="Product Count Can not be Zero";
  isError:boolean = false;

  getTotalCheckoutCost() : number {
    let totalCost = 0;
    if(this.productsInCart.length){
      totalCost =this.productsInCart.map(product => product.productPrice * product.productCheckoutCount).reduce((prev, next) => prev + next);
    }
    return totalCost;
  }

  removeFromCart(productToRemove: Product) : void {
    this.productsInCart.splice(this.productsInCart.findIndex(product => product.productId === productToRemove.productId),1);
    productToRemove.isProductAvailable = true;
    productToRemove.productCheckoutCount = 1;
  }

}
