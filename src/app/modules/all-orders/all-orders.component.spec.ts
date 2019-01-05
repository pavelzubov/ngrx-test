import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrdersComponent } from './all-orders.component';
import { BlockComponent } from '../../components/block/block.component';
import { TableComponent } from '../../components/table/table/table.component';
import { ComponentsModule } from '../../components/components.module';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { reducers } from '../../store/reducers';

describe('AllOrdersComponent', () => {
    let component: AllOrdersComponent;
    let fixture: ComponentFixture<AllOrdersComponent>;
    let store: Store<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ComponentsModule, StoreModule.forRoot(reducers)],
            declarations: [AllOrdersComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(AllOrdersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

export function MockStore(mockStore: any) {
    const mockData: BehaviorSubject<Object> = new BehaviorSubject<Object>(mockStore);

    const store = TestBed.get(Store);
    const storeSpy = spyOn(store, 'select').and.callFake(fn => {
        return map.call(mockData, fn);
    });

    return storeSpy;
}

export function MockDispatch() {
    const store = TestBed.get(Store);
    const dispatchSpy = spyOn(store, 'dispatch').and.callFake(() => {
        return;
    });
    return dispatchSpy;
}
