import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketLoaderComponent } from './socket-loader.component';

describe('SocketLoaderComponent', () => {
  let component: SocketLoaderComponent;
  let fixture: ComponentFixture<SocketLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocketLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
