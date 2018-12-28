import { Injectable } from '@angular/core';
import { SimplexService } from './simplex.service';
import { WebsocketService } from './websocket.service';
import { filter, map, mergeAll, mergeMap, switchMap } from 'rxjs/operators';
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
                return this.simplexService.getAccountInformation().pipe(
                    switchMap(info => {
                        console.log(info);
                        return this.websocketService.getUserDataStream().pipe(
                            filter((inf: any) => inf.e === 'outboundAccountInfo'),
                            map((inf: any) => {
                                console.log(inf);
                                return { ...inf, balances: inf.B };
                            })
                        );
                    })
                );
        }
    }
}
export const USER_DATA = 'USER_DATA';
