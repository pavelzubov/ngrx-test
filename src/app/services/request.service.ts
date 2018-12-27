import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as crypto from 'crypto-js';
import { select, Store } from '@ngrx/store';
import { ChangePrivateKeyRequest } from '../store/actions/keys.actions';
import { getPrivateKeySelector, getPublicKeySelector } from '../store/reducers';

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    private privateKey: string;
    private publicKey: string;
    constructor(private http: HttpClient, private store: Store<{}>) {
        this.privateKey = localStorage.getItem('privateKey');
        this.store.dispatch(new ChangePrivateKeyRequest(this.privateKey));
        store.pipe(select(getPrivateKeySelector)).subscribe(key => {
            localStorage.setItem('privateKey', key);
            this.privateKey = key;
        });
        store.pipe(select(getPublicKeySelector)).subscribe(key => (this.publicKey = key));
    }

    public get = (options: RequestOptions): Observable<any> =>
        this.sendRequest(options, HTTP_METHODS.GET);

    public post = (options: RequestOptions): Observable<any> =>
        this.sendRequest(options, HTTP_METHODS.POST);

    public sendRequest(options: RequestOptions, method: string): Observable<any> {
        const headers = {};
        const body = { ...options.params };
        if (options.type && options.type.includes(REQUEST_TYPE.AUTHORIZED)) {
            headers['X-MBX-APIKEY'] = this.publicKey;
            headers['content-type'] = 'application/x-www-form-urlencoded';
        }
        if (options.type && options.type.includes(REQUEST_TYPE.SIGNED)) {
            body['timestamp'] = String(Date.now());
            body['signature'] = this.signOptions(body, this.privateKey);
        }
        const httpOptions = {
            params:
                method === HTTP_METHODS.GET ? new HttpParams({ fromObject: body }) : null,
            headers: new HttpHeaders(headers)
        };
        switch (method) {
            case HTTP_METHODS.GET:
                return this.http.get(options.url, httpOptions);
            case HTTP_METHODS.POST:
            default:
                return this.http.post(options.url, this.parseOptions(body), httpOptions);
        }
    }

    private signOptions = (options: OrderRequest, privateKey: string): string =>
        String(crypto.HmacSHA256(this.parseOptions(options), privateKey));

    private parseOptions = (options: OrderRequest) =>
        Object.entries(options)
            .map(item => `${item[0]}=${String(item[1]).toUpperCase()}`)
            .join('&');
}
export interface RequestOptions {
    url: string;
    params: OrderRequest;
    type?: REQUEST_TYPE[];
}
export enum REQUEST_TYPE {
    AUTHORIZED,
    SIGNED
}
export interface OrderRequest {
    symbol?: string;
    price?: string;
    quantity?: string;
    timeInForce?: TimeInForce;
    side?: string;
    type?: string;
    timestamp?: string;
    limit?: string;
}
export enum TimeInForce {
    GTC = 'GTC',
    IOC = 'IOC',
    FOK = 'FOK'
}
export enum HTTP_METHODS {
    POST = 'post',
    GET = 'get'
}
