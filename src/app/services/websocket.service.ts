import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { interval, Subject } from 'rxjs';
import { catchError, map, takeWhile } from 'rxjs/operators';

export interface ChainElement {
    method: string;
    symbol?: boolean | string;
    levels?: boolean | number;
    interval?: boolean | number;
}

@Injectable()
export class WebsocketService {
    private api = 'wss://stream.binance.com:9443/';
    private reconnectInterval = 5000;
    private reconnectAttempts = 10;
    private websocket$: WebSocketSubject<any>;
    private wsMessages$: Subject<any>;
    private url: string;
    private chain = {
        depth: <ChainElement>{ symbol: true, method: 'depth', levels: true },
        miniTicker: <ChainElement>{ method: '!miniTicker@arr', interval: true },
        trade: <ChainElement>{ symbol: true, method: 'trade' }
    };
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
        const url = `${this.api}ws/!miniTicker@arr`;
        return this.connect(url);
    }

    public symbolTicketSocket(symbol: string = 'bnbbtc') {
        const url = `${this.api}ws/${symbol}@ticker`;
        return this.connect(url);
    }

    public symbolTradeSocket(symbol: string = 'bnbbtc') {
        const url = `${this.api}ws/${symbol}@trade`;
        return this.connect(url);
    }

    public symbolDepthSocket(symbol: string = 'bnbbtc') {
        const url = `${this.api}ws/${symbol}@depth`;
        return this.connect(url);
    }

    public symbolMiniTickerSocket(symbol: string = 'bnbbtc') {
        const url = `${this.api}ws/${symbol}@miniTicker`;
        return this.connect(url);
    }

    public marketTicketsSocket() {
        const url = `${this.api}ws/!ticker@arr`;
        return this.connect(url);
    }

    public chainSocket({ symbol, levels = 5, interval = 300 }: ChainElement) {
        const request = Object.values(this.chain).reduce(
            (accumulator, element: ChainElement) =>
                accumulator +
                `${element.symbol ? symbol + '@' : ''}${element.method}${
                    element.interval ? `@${interval}ms` : ''
                }${element.levels ? `${levels}` : ''}/`,
            ''
        );
        return this.connect(`${this.api}stream?streams=${request}`);
    }
}
