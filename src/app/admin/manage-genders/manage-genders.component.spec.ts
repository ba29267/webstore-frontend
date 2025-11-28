import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGendersComponent } from './manage-genders.component';

describe('ManageGendersComponent', () => {
  let component: ManageGendersComponent;
  let fixture: ComponentFixture<ManageGendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageGendersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageGendersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
