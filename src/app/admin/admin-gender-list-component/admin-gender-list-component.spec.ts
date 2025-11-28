import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenderListComponent } from './admin-gender-list-component';

describe('AdminGenderListComponent', () => {
  let component: AdminGenderListComponent;
  let fixture: ComponentFixture<AdminGenderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGenderListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGenderListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
