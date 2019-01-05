import { TestBed } from '@angular/core/testing';

import { RequestService } from './request.service';
import { Store, StoreModule } from '@ngrx/store';
import { ComponentsModule } from '../components/components.module';
import { reducers } from '../store/reducers';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('RequestService', () => {
    let store: Store<any>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot(reducers), HttpClientModule]
        });
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
    });

    it('should be created', () => {
        const service: RequestService = TestBed.get(RequestService);
        expect(service).toBeTruthy();
    });
});
