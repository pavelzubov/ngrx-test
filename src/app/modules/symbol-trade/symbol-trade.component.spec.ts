import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolTradeComponent } from './symbol-trade.component';

describe('SymbolMiniTickerComponent', () => {
  let component: SymbolTradeComponent;
  let fixture: ComponentFixture<SymbolTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
