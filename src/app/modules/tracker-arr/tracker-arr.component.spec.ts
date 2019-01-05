import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerArrComponent } from './tracker-arr.component';
import { BuyFormComponent } from '../buy-form/buy-form.component';
import { BlockComponent } from '../../components/block/block.component';
import { ListComponent } from '../../components/list/list.component';
import { ComponentsModule } from '../../components/components.module';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers';

describe('TrackerArrComponent', () => {
    let component: TrackerArrComponent;
    let fixture: ComponentFixture<TrackerArrComponent>;
    let store: Store<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ComponentsModule, StoreModule.forRoot(reducers)],
            declarations: [TrackerArrComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(TrackerArrComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
