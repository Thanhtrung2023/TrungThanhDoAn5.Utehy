import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaLspComponent } from './them-sua-lsp.component';

describe('ThemSuaLspComponent', () => {
  let component: ThemSuaLspComponent;
  let fixture: ComponentFixture<ThemSuaLspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaLspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemSuaLspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
