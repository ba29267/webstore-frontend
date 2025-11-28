import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApplyDiscountComponent } from './admin-apply-discount-component';

describe('AdminApplyDiscountComponent', () => {
  let component: AdminApplyDiscountComponent;
  let fixture: ComponentFixture<AdminApplyDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminApplyDiscountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminApplyDiscountComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
