import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as crypto from 'crypto-js';
import { select, Store } from '@ngrx/store';
import { getPrivateKeySelector, getPublicKeySelector } from '../store/reducers';
import { ChangePrivateKeyRequest } from '../store/actions/keys.actions';
import { FormattingService } from './formatting.service';
import {
    OrderRequest,
    RequestService,
    REQUEST_TYPE,
    TimeInForce
} from './request.service';

@Injectable()
export class SimplexService {
    private url = 'https://www.binance.com/api/v1/';
    constructor(
        private http: HttpClient,
        private store: Store<{}>,
        private formattingService: FormattingService,
        private requestService: RequestService
    ) {}
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
        /*const httpOptions = {
            params: new HttpParams({
                fromObject: { symbol: symbol.toUpperCase(), limit: '5' }
            })
        };*/
        return this.requestService.get({
            url: '/api/v1/depth',
            params: { symbol: symbol, limit: '5' }
        });
        // return this.http.get('/api/v1/depth', httpOptions).pipe(map(res => <any[]>res));
    }

    public postBuy({ symbol, price, quantity, type }: TradeRequest): Observable<any[]> {
        return this.newOrder({
            symbol,
            type,
            price: String(price),
            quantity: this.formattingService.formatValue(quantity, 4),
            timeInForce: TimeInForce.GTC,
            side: 'BUY'
        });
    }

    public postSell({ symbol, price, quantity, type }: TradeRequest): Observable<any[]> {
        return this.newOrder({
            symbol,
            type,
            price: String(price),
            quantity: this.formattingService.formatValue(quantity, 4),
            timeInForce: TimeInForce.GTC,
            side: 'SELL'
        });
    }

    private newOrder(options: OrderRequest): Observable<any> {
        return this.requestService.post({
            url: '/api/v3/order',
            params: options,
            type: [REQUEST_TYPE.SIGNED, REQUEST_TYPE.AUTHORIZED]
        });
    }
}
export interface TradeRequest {
    symbol: string;
    price: number;
    quantity: number;
    type: string;
}
