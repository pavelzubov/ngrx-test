import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolTicketComponent } from './symbol-ticket.component';

describe('SymbolMiniTickerComponent', () => {
  let component: SymbolTicketComponent;
  let fixture: ComponentFixture<SymbolTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
