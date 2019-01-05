import { TestBed } from '@angular/core/testing';

import { WebsocketService } from './websocket.service';
import { SimplexService } from './simplex.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';

describe('WebsocketService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [SimplexService, WebsocketService],
            imports: [HttpClientModule, StoreModule.forRoot(reducers)]
        })
    );

    it('should be created', () => {
        const service: WebsocketService = TestBed.get(WebsocketService);
        expect(service).toBeTruthy();
    });
});
