import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSPComponent } from './lsp.component';

describe('LSPComponent', () => {
  let component: LSPComponent;
  let fixture: ComponentFixture<LSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
