import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminColorFormComponent } from './admin-color-form-component';

describe('AdminColorFormComponent', () => {
  let component: AdminColorFormComponent;
  let fixture: ComponentFixture<AdminColorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminColorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminColorFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
