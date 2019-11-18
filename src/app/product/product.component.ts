import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() product: Product;
  @Output() productToEmit = new EventEmitter<Product>();

  sendProductToPaymentCart(product:Product) {
    this.product.isProductAvailable = false;
    this.productToEmit.emit(product);
  }

}
