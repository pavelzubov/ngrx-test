import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideBlockComponent } from './statistic.component';

describe('InsideBlockComponent', () => {
  let component: InsideBlockComponent;
  let fixture: ComponentFixture<InsideBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
