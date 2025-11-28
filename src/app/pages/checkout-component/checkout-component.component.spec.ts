import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponentComponent } from './checkout-component.component';

describe('CheckoutComponentComponent', () => {
  let component: CheckoutComponentComponent;
  let fixture: ComponentFixture<CheckoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutComponentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
