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

    public getOpenOrders = (symbol: string = null): Observable<any[]> =>
        this.requestService.get({
            url: 'http://localhost:2000/openOrders',
            params: { symbol: symbol },
            type: [REQUEST_TYPE.SIGNED, REQUEST_TYPE.AUTHORIZED]
        });

    public getAllOrders = (symbol: string): Observable<any[]> =>
        this.requestService.get({
            url: 'http://localhost:2000/allOrders',
            params: { symbol: symbol.toUpperCase() },
            type: [REQUEST_TYPE.SIGNED, REQUEST_TYPE.AUTHORIZED]
        });

    public getUserStreamKey = (): Observable<any[]> =>
        this.requestService.post({
            url: '/api/v1/userDataStream',
            type: [REQUEST_TYPE.AUTHORIZED]
        });

    public getAccountInformation = (): Observable<any[]> =>
        this.requestService.get({
            url: 'http://localhost:2000/account',
            type: [REQUEST_TYPE.SIGNED, REQUEST_TYPE.AUTHORIZED]
        });

    public getTrades = (symbol): Observable<any[]> =>
        this.requestService.get({
            url: 'http://localhost:2000/trades',
            params: { symbol: symbol.toUpperCase(), limit: '20' }
        });

    public getTickers = (symbol?: string): Observable<any[]> =>
        this.requestService.get({
            url: '/api/v1/ticker/24hr',
            params: symbol ? { symbol: symbol.toUpperCase() } : {}
        });

    public getDepth = (symbol?: string): Observable<any[]> =>
        this.requestService.get({
            url: '/api/v1/depth',
            params: { symbol: symbol.toUpperCase(), limit: '5' }
        });

    public postBuy = ({
        symbol,
        price,
        quantity,
        type
    }: TradeRequest): Observable<any[]> =>
        this.newOrder({
            symbol: symbol.toUpperCase(),
            type,
            price: String(price),
            quantity: this.formattingService.formatValue(quantity, 3),
            timeInForce: TimeInForce.GTC,
            side: 'BUY'
        });

    public postSell = ({
        symbol,
        price,
        quantity,
        type
    }: TradeRequest): Observable<any[]> =>
        this.newOrder({
            symbol: symbol.toUpperCase(),
            type,
            price: String(price),
            quantity: this.formattingService.formatValue(quantity, 3),
            timeInForce: TimeInForce.GTC,
            side: 'SELL'
        });

    private newOrder = (options: OrderRequest): Observable<any> =>
        this.requestService.post({
            url: 'http://localhost:2000/order',
            params: options,
            type: [REQUEST_TYPE.SIGNED, REQUEST_TYPE.AUTHORIZED]
        });
}
export interface TradeRequest {
    symbol: string;
    price: number;
    quantity: number;
    type: string;
}
export interface OpenOrdersRequest {
    symbol?: string;
    recvWindow?: string;
}
