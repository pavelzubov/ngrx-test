import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolSwitchComponent } from './symbol-switch.component';

describe('SymbolSwitchComponent', () => {
  let component: SymbolSwitchComponent;
  let fixture: ComponentFixture<SymbolSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
