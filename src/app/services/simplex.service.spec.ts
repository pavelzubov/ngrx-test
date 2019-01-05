import { TestBed } from '@angular/core/testing';

import { SimplexService } from './simplex.service';
import { RequestService } from './request.service';
import { FormattingService } from './formatting.service';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';

describe('SimplexService', () => {
    let store: Store<any>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RequestService, FormattingService, SimplexService],
            imports: [HttpClientModule, StoreModule.forRoot(reducers)]
        });
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
    });

    it('should be created', () => {
        const service: SimplexService = TestBed.get(SimplexService);
        expect(service).toBeTruthy();
    });
});
