import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  productsInCart:Product[] = [];

  constructor() { }

  ngOnInit() {
  }

  addToProductsInCart(productsInCartRecieved:Product[]){
    this.productsInCart = productsInCartRecieved;
  }

}
