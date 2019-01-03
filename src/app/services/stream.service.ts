import { Injectable } from '@angular/core';
import { SimplexService } from './simplex.service';
import { WebsocketService } from './websocket.service';
import { merge, Observable, of } from 'rxjs';
import { filter, map, pairwise } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StreamService {
    constructor(
        private simplexService: SimplexService,
        private websocketService: WebsocketService
    ) {}

    public getUserData = (): Observable<any> =>
        this.generateStream([
            this.simplexService.getAccountInformation(),
            this.websocketService.getAccountInformationStream()
        ]);

    public getOpenOrders = (symbol?: string): Observable<any> =>
        this.generateStream(
            [
                this.simplexService.getOpenOrders(symbol),
                this.websocketService.getOpenOrdersStream()
            ],
            STREAM_TYPE.ARRAY
        );

    public getAllOrders = (symbol?: string): Observable<any> =>
        this.generateStream(
            [
                this.simplexService
                    .getAllOrders(symbol)
                    .pipe(map(item => item.reverse())),
                this.websocketService.getAllOrdersStream(symbol)
            ],
            STREAM_TYPE.ARRAY
        );

    public generateStream = (
        streams: Observable<any>[],
        streamType: STREAM_TYPE = STREAM_TYPE.SIMPLE
    ): Observable<any> =>
        merge(...streams).pipe(
            map(item => {
                switch (streamType) {
                    case STREAM_TYPE.ARRAY:
                        if (Array.isArray(item)) return item;
                        return [item];
                    case STREAM_TYPE.SIMPLE:
                    default:
                        return item;
                }
            })
        );
}
export const USER_DATA = 'USER_DATA';
export enum STREAM_TYPE {
    SIMPLE,
    ARRAY
}
