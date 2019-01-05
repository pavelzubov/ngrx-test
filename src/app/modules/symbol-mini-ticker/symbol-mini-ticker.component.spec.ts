import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolMiniTickerComponent } from './symbol-mini-ticker.component';
import { BuyFormComponent } from '../buy-form/buy-form.component';
import { BlockComponent } from '../../components/block/block.component';
import { SymbolComponent } from '../../components/symbol/symbol.component';
import { ComponentsModule } from '../../components/components.module';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers';

describe('SymbolMiniTickerComponent', () => {
    let component: SymbolMiniTickerComponent;
    let fixture: ComponentFixture<SymbolMiniTickerComponent>;
    let store: Store<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ComponentsModule, StoreModule.forRoot(reducers)],
            declarations: [SymbolMiniTickerComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(SymbolMiniTickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
