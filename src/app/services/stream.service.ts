import { Injectable } from '@angular/core';
import { SimplexService } from './simplex.service';
import { WebsocketService } from './websocket.service';
import { merge, Observable, of } from 'rxjs';
import { filter, map, pairwise, reduce, scan, tap } from 'rxjs/operators';

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
            this.websocketService.getAccountInformationSocket()
        ]);

    public getOpenOrders = (symbol?: string): Observable<any> =>
        this.generateStream(
            [
                this.simplexService.getOpenOrders(symbol),
                this.websocketService.getOpenOrdersSocket()
            ],
            STREAM_TYPE.ARRAY
        );

    public getAllOrders = (symbol?: string): Observable<any> =>
        this.generateStream(
            [
                this.simplexService
                    .getAllOrders(symbol)
                    .pipe(map(item => item.reverse())),
                this.websocketService.getAllOrdersSocket(symbol)
            ],
            STREAM_TYPE.ARRAY
        );

    public getSymbolTrade = (symbol: string): Observable<any> =>
        this.generateStream(
            [
                this.simplexService.getTrades(symbol).pipe(map(item => item.reverse())),
                this.websocketService.chainSocket({ symbol: symbol }).pipe(
                    filter(item => item.stream === `${symbol.toLowerCase()}@trade`),
                    map(item => item.data)
                )
            ],
            STREAM_TYPE.ARRAY
        ).pipe();

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
