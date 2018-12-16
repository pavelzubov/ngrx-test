import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolMiniTickerComponent } from './symbol-mini-ticker.component';

describe('SymbolMiniTickerComponent', () => {
  let component: SymbolMiniTickerComponent;
  let fixture: ComponentFixture<SymbolMiniTickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolMiniTickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolMiniTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
