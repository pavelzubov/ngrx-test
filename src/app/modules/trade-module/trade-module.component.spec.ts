import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeModuleComponent } from './trade-module.component';
import { ComponentsModule } from '../../components/components.module';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers';

describe('TradeModuleComponent', () => {
    let component: TradeModuleComponent;
    let fixture: ComponentFixture<TradeModuleComponent>;
    let store: Store<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ComponentsModule, StoreModule.forRoot(reducers)],
            declarations: [TradeModuleComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(TradeModuleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /*it('should create', () => {
        expect(component).toBeTruthy();
    });*/
});
