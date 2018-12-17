import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { interval, Subject } from 'rxjs';
import { IWsMessage } from '../websocket';
import { catchError, map, takeWhile } from 'rxjs/operators';

@Injectable()
export class WebsocketService {
    private api = 'wss://stream.binance.com:9443/ws/';
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
        }
        this.websocket$ = new WebSocketSubject(this.url);
        this.wsMessages$ = new Subject<any>();
        this.websocket$.subscribe(
            message => this.wsMessages$.next(message),
            error => {
                if (!this.websocket$) {
                    console.log('Disconnect', error);
                    const reconnection$ = interval(this.reconnectInterval).pipe(
                        takeWhile((v, index) => index < this.reconnectAttempts && !this.websocket$)
                    );
                    return reconnection$.pipe(map(() => this.connect(this.url)));
                }
            }
        );
        return this.wsMessages$;
    }

    public trackerArrSocket() {
        const url = `${this.api}!miniTicker@arr`;
        return this.connect(url);
    }

    public symbolTicketSocket(symbol: string = 'bnbbtc') {
        const url = `${this.api}${symbol}@ticker`;
        return this.connect(url);
    }

    public symbolTradeSocket(symbol: string = 'bnbbtc') {
        const url = `${this.api}${symbol}@trade`;
        return this.connect(url);
    }

    public symbolDepthSocket(symbol: string = 'bnbbtc') {
        const url = `${this.api}${symbol}@depth`;
        return this.connect(url);
    }

    public symbolMiniTickerSocket(symbol: string = 'bnbbtc') {
        const url = `${this.api}${symbol}@miniTicker`;
        return this.connect(url);
    }

    public marketTicketsSocket() {
        const url = `${this.api}!ticker@arr`;
        return this.connect(url);
    }
}
