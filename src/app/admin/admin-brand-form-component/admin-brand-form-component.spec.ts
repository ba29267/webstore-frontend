import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBrandFormComponent } from './admin-brand-form-component';

describe('AdminBrandFormComponent', () => {
  let component: AdminBrandFormComponent;
  let fixture: ComponentFixture<AdminBrandFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBrandFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBrandFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
