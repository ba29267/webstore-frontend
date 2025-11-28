import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSizesComponent } from './manage-sizes.component';

describe('ManageSizesComponent', () => {
  let component: ManageSizesComponent;
  let fixture: ComponentFixture<ManageSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSizesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
