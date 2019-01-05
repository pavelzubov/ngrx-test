import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SocketsComponent } from './components/sockets/sockets.component';
import { TradeBlockComponent } from './modules/trade-block/trade-block.component';
import { KeyComponent } from './modules/key/key.component';
import { OpenOrdersComponent } from './modules/open-orders/open-orders.component';
import { AllOrdersComponent } from './modules/all-orders/all-orders.component';
import { ComponentsModule } from './components/components.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ComponentsModule],
            declarations: [AppComponent, SocketsComponent]
        }).compileComponents();
    }));

    /*it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });*/

    /*it(`should have as title 'angular-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-test');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-test!');
  });*/
});
