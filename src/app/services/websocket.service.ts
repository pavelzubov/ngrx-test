import {Injectable} from '@angular/core';
import {WebSocketSubject} from 'rxjs/webSocket';
import {interval, Subject} from 'rxjs';
import {IWsMessage} from '../websocket';
import {catchError, map, takeWhile} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    private reconnectInterval = 5000;
    private reconnectAttempts = 10;

    constructor() {
    }

    private connect(url) {
        const websocket$ = new WebSocketSubject(url);
        const wsMessages$ = new Subject<any>();
        websocket$.subscribe(message => wsMessages$.next(message), error => {
            if (!websocket$) {
                console.log('Disconnect');
                const reconnection$ = interval(this.reconnectInterval)
                    .pipe(takeWhile((v, index) => index < this.reconnectAttempts && !websocket$));
                return reconnection$.pipe(map(
                    () => this.connect(url)));
            }
        });
        return wsMessages$;
        /*return websocket$.pipe(catchError(error => {
            if (!websocket$) {
                console.log('Disconnect');
                const reconnection$ = interval(this.reconnectInterval)
                    .pipe(takeWhile((v, index) => index < this.reconnectAttempts && !websocket$));
                return reconnection$.pipe(map(
                    () => this.connect(url),
                    null));
            }
        }));*/
    }

    public miniTrackerArrSocket() {
        const url = 'wss://stream.binance.com:9443/ws/!miniTicker@arr';
        return this.connect(url);
    }

    public symbolTicketSocket(symbol: string = 'bnbbtc') {
        const url = `wss://stream.binance.com:9443/ws/${symbol}@ticker`;
        return this.connect(url);
    }

    public symbolTradeSocket(symbol: string = 'bnbbtc') {
        const url = `wss://stream.binance.com:9443/ws/${symbol}@trade`;
        return this.connect(url);
    }

    public symbolMiniTickerSocket(symbol: string = 'bnbbtc') {
        const url = `wss://stream.binance.com:9443/ws/${symbol}@miniTicker`;
        return this.connect(url);
    }

    public allMarketTicketsSocket() {
        const url = `wss://stream.binance.com:9443/ws/!ticker@arr`;
        return this.connect(url);
    }
}
