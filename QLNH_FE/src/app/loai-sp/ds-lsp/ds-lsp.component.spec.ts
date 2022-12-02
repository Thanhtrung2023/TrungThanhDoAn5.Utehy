import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLspComponent } from './ds-lsp.component';

describe('DsLspComponent', () => {
  let component: DsLspComponent;
  let fixture: ComponentFixture<DsLspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsLspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsLspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
