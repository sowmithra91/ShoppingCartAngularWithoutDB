import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CounterComponent } from './counter/counter.component';
import { CounterCartComponent } from './counter-cart/counter-cart.component';
import { ProductComponent } from './product/product.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductsListPaneComponent } from './products-list-pane/products-list-pane.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NavBarComponent,
    CounterComponent,
    CounterCartComponent,
    ProductComponent,
    ProductCartComponent,
    ProductsListPaneComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
