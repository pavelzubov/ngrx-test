import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as crypto from 'crypto-js';
import * as Base64 from 'crypto-js/enc-base64';

@Injectable()
export class SimplexService {
    private url = 'https://www.binance.com/api/v1/';
    // private url = 'https://www.binance.com/api/v1/';
    constructor(private http: HttpClient) {}
    public getTrades(symbol): Observable<any[]> {
        // console.log(crypto);
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
        this.newOrder({
            symbol: 'BTC',
            side: 'BUY',
            type: 'type',
            quantity: '100',
            timestamp: new Date().toString()
        });
        return of(['success']);
    }

    public postSell({ price, amount, total }: TradeRequest): Observable<any[]> {
        return of(['success']);
    }

    private newOrder({ symbol, side, type, quantity, timestamp }: OrderRequest) {
        const httpOptions = {
            params: new HttpParams({
                fromObject: { symbol, side, type, quantity, timestamp }
            })
        };
        console.log(
            JSON.stringify({ symbol, side, type, quantity, timestamp }),
            Base64.stringify(
                crypto.HmacSHA256(
                    JSON.stringify({ symbol, side, type, quantity, timestamp }),
                    '123'
                )
            )
        );
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
