import { TestBed } from '@angular/core/testing';

import { StreamService } from './stream.service';
import { SimplexService } from './simplex.service';
import { WebsocketService } from './websocket.service';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { ComponentsModule } from '../components/components.module';
import { reducers } from '../store/reducers';

describe('StreamService', () => {
    let store: Store<any>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SimplexService, WebsocketService],
            imports: [HttpClientModule, StoreModule.forRoot(reducers)]
        });
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
    });

    /*it('should be created', () => {
        const service: StreamService = TestBed.get(StreamService);
        expect(service).toBeTruthy();
    });*/
});
