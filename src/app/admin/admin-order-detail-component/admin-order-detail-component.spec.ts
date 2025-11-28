import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderDetailComponent } from './admin-order-detail-component';

describe('AdminOrderDetailComponent', () => {
  let component: AdminOrderDetailComponent;
  let fixture: ComponentFixture<AdminOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminOrderDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrderDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
