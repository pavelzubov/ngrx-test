import { Injectable } from '@angular/core';
import { SimplexService } from './simplex.service';
import { WebsocketService } from './websocket.service';
import { merge, Observable, of } from 'rxjs';
import { map, pairwise } from 'rxjs/operators';

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
                    this.websocketService.getAccountInformationStream()
                );
        }
    }
    public getUserData = (): Observable<any> =>
        merge(
            this.simplexService.getAccountInformation(),
            this.websocketService.getAccountInformationStream()
        );
    public getOpenOrders = (symbol?: string): Observable<any> =>
        merge(
            this.simplexService.getOpenOrders(symbol),
            this.websocketService.getOpenOrdersStream()
        ).pipe(
            pairwise(),
            map(values => {
                let res = [];

                console.log(values);
                values.forEach(value => {
                    if (Array.isArray(values)) res = [...res, ...value];
                    else res.push(value);
                });
                console.log(res);
                return res;
            })
        );
}
export const USER_DATA = 'USER_DATA';
