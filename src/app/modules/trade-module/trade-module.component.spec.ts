import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeModuleComponent } from './trade-module.component';

describe('TradeModuleComponent', () => {
  let component: TradeModuleComponent;
  let fixture: ComponentFixture<TradeModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
