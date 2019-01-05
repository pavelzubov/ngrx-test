import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideBlockComponent } from './inside-block.component';
import { TableComponent } from '../table/table/table.component';
import { StateObservable, Store, StoreModule } from '@ngrx/store';
import { ComponentsModule } from '../components.module';
import { reducers } from '../../store/reducers';

describe('InsideBlockComponent', () => {
    let component: InsideBlockComponent;
    let fixture: ComponentFixture<InsideBlockComponent>;
    let store: Store<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot(reducers)],
            declarations: [InsideBlockComponent, TableComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(InsideBlockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
