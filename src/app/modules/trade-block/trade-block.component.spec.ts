import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeBlockComponent } from './trade-block.component';
import { BuyFormComponent } from '../buy-form/buy-form.component';
import { BlockComponent } from '../../components/block/block.component';
import { TradeModuleComponent } from '../trade-module/trade-module.component';
import { ComponentsModule } from '../../components/components.module';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TradeBlockComponent', () => {
    let component: TradeBlockComponent;
    let fixture: ComponentFixture<TradeBlockComponent>;
    let store: Store<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ComponentsModule,
                StoreModule.forRoot(reducers),
                BrowserAnimationsModule
            ],
            declarations: [TradeBlockComponent, TradeModuleComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(TradeBlockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
