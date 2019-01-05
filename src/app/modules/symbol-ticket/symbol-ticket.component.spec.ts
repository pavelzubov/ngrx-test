import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolTicketComponent } from './symbol-ticket.component';
import { BuyFormComponent } from '../buy-form/buy-form.component';
import { BlockComponent } from '../../components/block/block.component';
import { StatisticComponent } from '../statistic/statistic.component';
import { StatisticItemComponent } from '../../components/statistic-item/statistic-item.component';
import { ComponentsModule } from '../../components/components.module';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers';

describe('SymbolTicketComponent', () => {
    let component: SymbolTicketComponent;
    let fixture: ComponentFixture<SymbolTicketComponent>;
    let store: Store<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ComponentsModule, StoreModule.forRoot(reducers)],
            declarations: [SymbolTicketComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(SymbolTicketComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
