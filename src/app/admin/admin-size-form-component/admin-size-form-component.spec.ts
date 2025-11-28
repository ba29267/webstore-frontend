import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSizeFormComponent } from './admin-size-form-component';

describe('AdminSizeFormComponent', () => {
  let component: AdminSizeFormComponent;
  let fixture: ComponentFixture<AdminSizeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSizeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSizeFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
