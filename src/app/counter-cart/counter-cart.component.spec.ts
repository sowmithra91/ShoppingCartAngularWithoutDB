import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCartComponent } from './counter-cart.component';

describe('CounterCartComponent', () => {
  let component: CounterCartComponent;
  let fixture: ComponentFixture<CounterCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
