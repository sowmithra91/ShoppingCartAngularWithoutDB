import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() productInCart: Product;
  @Output() productToDeleteFromCart = new EventEmitter<Product>();

  errorMessage: string = "Product Count Can not be Zero";
  isError: boolean = false;
  doFade: boolean = false;

  incrementProductCount(product: Product): void {
    if (product.productCheckoutCount === 1) {
      this.isError = false;
    }
    product.productCheckoutCount++;
  }

  decrementProductCount(product: Product): void {
    if (product.productCheckoutCount === 1) {
      this.isError = true;
      setTimeout(() => {
        this.doFade = true;
      }, 2000);
      this.doFade = false;
    } else {
      product.productCheckoutCount--;
    }
  }

  deleteThisProductFromCart(product: Product) {
    this.productToDeleteFromCart.emit(product);
  }

}
