import { Injectable, OnDestroy } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { interval, Observable, Subject } from 'rxjs';
import { catchError, filter, map, switchMap, takeWhile } from 'rxjs/operators';
import { SimplexService } from './simplex.service';

export interface ChainElement {
    method: string;
    symbol?: boolean | string;
    levels?: boolean | number;
    intervalMs?: boolean | number;
}

export const DEPTH = 'depth';
export const TICKER = 'ticker';
export const TRADE = 'trade';

interface SocketInterface {
    reconnectInterval: number;
    reconnectAttempts: number;
    reconnect(url: string): void;
    disconnect(): void;
    subscribe(): Subject<any>;
}

class Socket implements SocketInterface {
    private websocket$: WebSocketSubject<any>;
    private wsMessages$: Subject<any>;
    readonly reconnectInterval = 5000;
    readonly reconnectAttempts = 10;

    constructor(url: string) {
        this.connect(url);
    }

    private connect = (url: string) => {
        this.websocket$ = new WebSocketSubject(url);
        this.wsMessages$ = new Subject<any>();
        this.websocket$.subscribe(
            message => this.wsMessages$.next(message),
            error => {
                if (!this.websocket$) {
                    console.log('Disconnect', error);
                    return interval(this.reconnectInterval).pipe(
                        takeWhile(
                            (v, index) =>
                                index < this.reconnectAttempts && !this.websocket$
                        ),
                        map(() => this.connect(url))
                    );
                }
            }
        );
    };

    public disconnect = () => {
        this.websocket$.complete();
        this.wsMessages$.complete();
    };

    public reconnect = (url: string) => {
        this.disconnect();
        this.connect(url);
    };

    public subscribe = () => this.wsMessages$;
}

@Injectable()
export class WebsocketService implements OnDestroy {
    private api = 'wss://stream.binance.com:9443/';
    /*private reconnectInterval = 5000;
    private reconnectAttempts = 10;
    private websocket$: WebSocketSubject<any>;
    private wsMessages$: Subject<any>;
    private url: string;*/
    private chain = {
        depth: <ChainElement>{ symbol: true, method: DEPTH, levels: true },
        ticker: <ChainElement>{
            symbol: true,
            method: TICKER
        },
        trade: <ChainElement>{ symbol: true, method: TRADE }
    };
    private sockets: { [key: string]: SocketInterface } = {};

    constructor(private simplexService: SimplexService) {}

    ngOnDestroy() {
        Object.values(this.sockets).forEach((socket: SocketInterface) =>
            socket.disconnect()
        );
    }

    private connectSocket(type: string, url: string): Observable<any> {
        if (this.sockets[type]) this.sockets[type].reconnect(url);
        else this.sockets[type] = new Socket(url);
        return this.sockets[type].subscribe();
    }
    /*private connect(url) {
        this.url = url;
        if (this.websocket$) {
            this.websocket$.complete();
            this.wsMessages$.complete();
        }
        this.websocket$ = new WebSocketSubject(this.url);
        this.wsMessages$ = new Subject<any>();
        this.websocket$.subscribe(
            message => this.wsMessages$.next(message),
            error => {
                if (!this.websocket$) {
                    console.log('Disconnect', error);
                    const reconnection$ = interval(this.reconnectInterval).pipe(
                        takeWhile(
                            (v, index) =>
                                index < this.reconnectAttempts && !this.websocket$
                        )
                    );
                    return reconnection$.pipe(map(() => this.connect(this.url)));
                }
            }
        );
        return this.wsMessages$;
    }*/

    /*public trackerArrSocket() {
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
    }*/

    public marketTicketsSocket() {
        const socketName = '!ticker@arr';
        const url = `${this.api}ws/${socketName}`;
        return this.connectSocket(socketName, url);
    }

    public chainSocket({ symbol, levels = 5, intervalMs = 300 }: ChainElement) {
        const socketName = 'streams';
        const request = Object.values(this.chain).reduce(
            (accumulator, element: ChainElement) =>
                accumulator +
                `${element.symbol ? symbol + '@' : ''}${element.method}${
                    element.intervalMs ? `@${intervalMs}ms` : ''
                }${element.levels ? `${levels}` : ''}/`,
            ''
        );
        const url = `${this.api}stream?${socketName}=${request}`;
        return this.connectSocket(socketName, url);
    }
    public getUserDataStream = () => {
        const socketName = 'userData';
        return this.simplexService.getUserStreamKey().pipe(
            switchMap((key: any) => {
                const url = `${this.api}ws/${key.listenKey}`;
                return this.connectSocket(socketName, url).pipe(
                    filter(info => info.e === 'outboundAccountInfo'),
                    map(info => {
                        return { ...info, balances: info.B };
                    })
                );
            })
        );
    };
}
