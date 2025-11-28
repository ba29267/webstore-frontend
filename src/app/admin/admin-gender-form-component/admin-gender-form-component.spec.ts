import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenderFormComponent } from './admin-gender-form-component';

describe('AdminGenderFormComponent', () => {
  let component: AdminGenderFormComponent;
  let fixture: ComponentFixture<AdminGenderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGenderFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGenderFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
