import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';

describe('DataService', () => {
    let store: Store<any>;
    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [StoreModule.forRoot(reducers)] });
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
    });

    it('should be created', () => {
        const service: DataService = TestBed.get(DataService);
        expect(service).toBeTruthy();
    });
});
