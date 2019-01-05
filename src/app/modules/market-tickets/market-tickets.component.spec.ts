import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketTicketsComponent } from './market-tickets.component';
import { BuyFormComponent } from '../buy-form/buy-form.component';
import { BlockComponent } from '../../components/block/block.component';
import { ComponentsModule } from '../../components/components.module';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers';

describe('MarketTicketsComponent', () => {
    let component: MarketTicketsComponent;
    let fixture: ComponentFixture<MarketTicketsComponent>;
    let store: Store<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ComponentsModule, StoreModule.forRoot(reducers)],
            declarations: [MarketTicketsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(MarketTicketsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
