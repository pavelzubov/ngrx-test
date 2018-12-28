import { Injectable } from '@angular/core';
import { SimplexService } from './simplex.service';
import { WebsocketService } from './websocket.service';
import { merge, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StreamService {
    constructor(
        private simplexService: SimplexService,
        private websocketService: WebsocketService
    ) {}
    public getStream(name: string): Observable<any> {
        switch (name) {
            case USER_DATA:
                return merge(
                    this.simplexService.getAccountInformation(),
                    this.websocketService.getUserDataStream()
                );
        }
    }
}
export const USER_DATA = 'USER_DATA';
