import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSizeListComponent } from './admin-size-list-component';

describe('AdminSizeListComponent', () => {
  let component: AdminSizeListComponent;
  let fixture: ComponentFixture<AdminSizeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSizeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSizeListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
