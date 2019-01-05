import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketsComponent } from './sockets.component';
import { TradeBlockComponent } from '../../modules/trade-block/trade-block.component';
import { KeyComponent } from '../../modules/key/key.component';
import { OpenOrdersComponent } from '../../modules/open-orders/open-orders.component';
import { AllOrdersComponent } from '../../modules/all-orders/all-orders.component';
import { BlockComponent } from '../block/block.component';
import { TradeModuleComponent } from '../../modules/trade-module/trade-module.component';

describe('SocketsComponent', () => {
    let component: SocketsComponent;
    let fixture: ComponentFixture<SocketsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SocketsComponent,
                TradeBlockComponent,
                KeyComponent,
                OpenOrdersComponent,
                AllOrdersComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SocketsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /*it('should create', () => {
        expect(component).toBeTruthy();
    });*/
});
