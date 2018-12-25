import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as crypto from 'crypto-js';
import * as Base64 from 'crypto-js/enc-base64';
import { select, Store } from '@ngrx/store';
import {
    getBuyTradeSelector,
    getPrivateKeySelector,
    getPrivateKeysState
} from '../store/reducers';
import { ChangePrivateKeyRequest } from '../store/actions/keys.actions';

@Injectable()
export class SimplexService {
    private url = 'https://www.binance.com/api/v1/';
    private privateKey: string;
    constructor(private http: HttpClient, private store: Store<{}>) {
        this.privateKey = localStorage.getItem('privateKey');
        this.store.dispatch(new ChangePrivateKeyRequest(this.privateKey));
        store.pipe(select(getPrivateKeySelector)).subscribe(key => {
            localStorage.setItem('privateKey', key);
            this.privateKey = key;
        });
    }
    public getTrades(symbol): Observable<any[]> {
        const httpOptions = {
            params: new HttpParams({
                fromObject: { symbol: symbol.toUpperCase(), limit: '20' }
            })
        };
        return this.http.get('/api/v1/trades', httpOptions).pipe(map(res => <any[]>res));
    }

    public getTickers(symbol?: string): Observable<any[]> {
        const httpOptions = {
            params: new HttpParams({
                fromObject: symbol ? { symbol: symbol.toUpperCase() } : {}
            })
        };
        return this.http
            .get('/api/v1/ticker/24hr', httpOptions)
            .pipe(map(res => <any[]>res));
    }

    public getDepth(symbol?: string): Observable<any[]> {
        const httpOptions = {
            params: new HttpParams({
                fromObject: { symbol: symbol.toUpperCase(), limit: '5' }
            })
        };
        return this.http.get('/api/v1/depth', httpOptions).pipe(map(res => <any[]>res));
    }

    public postBuy({ price, amount, total }: TradeRequest): Observable<any[]> {
        return this.newOrder({
            symbol: 'ETHBTC',
            side: 'BUY',
            type: 'LIMIT',
            quantity: '0.03',
            timestamp: String(Date.now())
        });
    }

    public postSell({ price, amount, total }: TradeRequest): Observable<any[]> {
        return of(['success']);
    }

    private newOrder({
        symbol,
        side,
        type,
        quantity,
        timestamp
    }: OrderRequest): Observable<any[]> {
        const options = { symbol, side, type, quantity, timestamp };
        const parseOptions = Object.entries(options)
            .map(item => `${item[0]}=${item[1].toUpperCase()}`)
            .join('&');
        const signature = String(crypto.HmacSHA256(parseOptions, this.privateKey));
        const httpOptions = {
            params: new HttpParams({
                fromObject: { ...options, signature }
            })
        };
        console.log(parseOptions, signature);
        return this.privateKey ? of(['success']) : throwError('');
    }
}
export interface TradeRequest {
    symbol: string;
    price: number;
    amount: number;
    total: number;
}
export interface OrderRequest {
    symbol: string;
    side: string;
    type: string;
    quantity: string;
    timestamp: string;
}
