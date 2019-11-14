import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListPaneComponent } from './products-list-pane.component';

describe('ProductsListPaneComponent', () => {
  let component: ProductsListPaneComponent;
  let fixture: ComponentFixture<ProductsListPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
