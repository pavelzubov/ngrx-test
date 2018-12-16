import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolDepthComponent } from './symbol-depth.component';

describe('SymbolDepthComponent', () => {
  let component: SymbolDepthComponent;
  let fixture: ComponentFixture<SymbolDepthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolDepthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
