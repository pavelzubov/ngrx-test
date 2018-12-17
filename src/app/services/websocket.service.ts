import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { interval, Subject } from 'rxjs';
import { IWsMessage } from '../websocket';
import { catchError, map, takeWhile } from 'rxjs/operators';

@Injectable()
export class WebsocketService {
    private reconnectInterval = 5000;
    private reconnectAttempts = 10;
    private websocket$: WebSocketSubject<any>;
    private wsMessages$: Subject<any>;
    private url: string;
    constructor() {}

    private connect(url) {
        this.url = url;
        if (this.websocket$) {
            this.websocket$.complete();
            this.websocket$.unsubscribe();
        }
        this.websocket$ = new WebSocketSubject(this.url);
        this.wsMessages$ = new Subject<any>();
        this.websocket$.subscribe(
            message => this.wsMessages$.next(message),
            error => {
                if (!this.websocket$) {
                    console.log('Disconnect');
                    const reconnection$ = interval(this.reconnectInterval).pipe(
                        takeWhile((v, index) => index < this.reconnectAttempts && !this.websocket$)
                    );
                    return reconnection$.pipe(map(() => this.connect(this.url)));
                }
            }
        );
        return this.wsMessages$;
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

    public trackerArrSocket() {
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

    public symbolDepthSocket(symbol: string = 'bnbbtc') {
        const url = `wss://stream.binance.com:9443/ws/${symbol}@depth`;
        return this.connect(url);
    }

    public symbolMiniTickerSocket(symbol: string = 'bnbbtc') {
        const url = `wss://stream.binance.com:9443/ws/${symbol}@miniTicker`;
        return this.connect(url);
    }

    public marketTicketsSocket() {
        const url = `wss://stream.binance.com:9443/ws/!ticker@arr`;
        return this.connect(url);
    }
}
