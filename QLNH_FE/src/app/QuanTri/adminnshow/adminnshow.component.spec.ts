import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnshowComponent } from './adminnshow.component';

describe('AdminnshowComponent', () => {
  let component: AdminnshowComponent;
  let fixture: ComponentFixture<AdminnshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminnshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
