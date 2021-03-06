/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CreateWithdrawalRequestModel } from '../model/createWithdrawalRequestModel';
import { ErrorViewModel } from '../model/errorViewModel';
import { WalletPendingTransactionsViewModel } from '../model/walletPendingTransactionsViewModel';
import { WalletSummary } from '../model/walletSummary';
import { WalletTransactionsViewModel } from '../model/walletTransactionsViewModel';
import { WalletsInfo } from '../model/walletsInfo';
import { WithdrawalSummary } from '../model/withdrawalSummary';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class WalletService {

    protected basePath = 'https://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     *
     *
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10WalletAddressesGet(authorization: string, observe?: 'body', reportProgress?: boolean): Observable<WalletsInfo>;
    public v10WalletAddressesGet(authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WalletsInfo>>;
    public v10WalletAddressesGet(authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WalletsInfo>>;
    public v10WalletAddressesGet(authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10WalletAddressesGet.');
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<WalletsInfo>(`${this.basePath}/v1.0/wallet/addresses`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Wallet summary
     *
     * @param currency
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10WalletByCurrencyGet(currency: string, authorization: string, observe?: 'body', reportProgress?: boolean): Observable<WalletSummary>;
    public v10WalletByCurrencyGet(currency: string, authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WalletSummary>>;
    public v10WalletByCurrencyGet(currency: string, authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WalletSummary>>;
    public v10WalletByCurrencyGet(currency: string, authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling v10WalletByCurrencyGet.');
        }
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10WalletByCurrencyGet.');
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<WalletSummary>(`${this.basePath}/v1.0/wallet/${encodeURIComponent(String(currency))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Wallet transactions
     *
     * @param authorization JWT access token
     * @param assetId
     * @param from
     * @param to
     * @param assetType
     * @param txAction
     * @param skip
     * @param take
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10WalletTransactionsGet(authorization: string, assetId?: string, from?: Date, to?: Date, assetType?: string, txAction?: string, skip?: number, take?: number, observe?: 'body', reportProgress?: boolean): Observable<WalletTransactionsViewModel>;
    public v10WalletTransactionsGet(authorization: string, assetId?: string, from?: Date, to?: Date, assetType?: string, txAction?: string, skip?: number, take?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WalletTransactionsViewModel>>;
    public v10WalletTransactionsGet(authorization: string, assetId?: string, from?: Date, to?: Date, assetType?: string, txAction?: string, skip?: number, take?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WalletTransactionsViewModel>>;
    public v10WalletTransactionsGet(authorization: string, assetId?: string, from?: Date, to?: Date, assetType?: string, txAction?: string, skip?: number, take?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10WalletTransactionsGet.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (assetId !== undefined) {
            queryParameters = queryParameters.set('AssetId', <any>assetId);
        }
        if (from !== undefined) {
            queryParameters = queryParameters.set('From', <any>from.toISOString());
        }
        if (to !== undefined) {
            queryParameters = queryParameters.set('To', <any>to.toISOString());
        }
        if (assetType !== undefined) {
            queryParameters = queryParameters.set('AssetType', <any>assetType);
        }
        if (txAction !== undefined) {
            queryParameters = queryParameters.set('TxAction', <any>txAction);
        }
        if (skip !== undefined) {
            queryParameters = queryParameters.set('Skip', <any>skip);
        }
        if (take !== undefined) {
            queryParameters = queryParameters.set('Take', <any>take);
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<WalletTransactionsViewModel>(`${this.basePath}/v1.0/wallet/transactions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Wallet pending transactions
     *
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10WalletTransactionsPendingGet(authorization: string, observe?: 'body', reportProgress?: boolean): Observable<WalletPendingTransactionsViewModel>;
    public v10WalletTransactionsPendingGet(authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WalletPendingTransactionsViewModel>>;
    public v10WalletTransactionsPendingGet(authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WalletPendingTransactionsViewModel>>;
    public v10WalletTransactionsPendingGet(authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10WalletTransactionsPendingGet.');
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<WalletPendingTransactionsViewModel>(`${this.basePath}/v1.0/wallet/transactions/pending`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10WalletWithdrawInfoGet(authorization: string, observe?: 'body', reportProgress?: boolean): Observable<WithdrawalSummary>;
    public v10WalletWithdrawInfoGet(authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WithdrawalSummary>>;
    public v10WalletWithdrawInfoGet(authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WithdrawalSummary>>;
    public v10WalletWithdrawInfoGet(authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10WalletWithdrawInfoGet.');
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<WithdrawalSummary>(`${this.basePath}/v1.0/wallet/withdraw/info`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param txId
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10WalletWithdrawRequestCancelByTxIdPost(txId: string, authorization: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public v10WalletWithdrawRequestCancelByTxIdPost(txId: string, authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public v10WalletWithdrawRequestCancelByTxIdPost(txId: string, authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public v10WalletWithdrawRequestCancelByTxIdPost(txId: string, authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (txId === null || txId === undefined) {
            throw new Error('Required parameter txId was null or undefined when calling v10WalletWithdrawRequestCancelByTxIdPost.');
        }
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10WalletWithdrawRequestCancelByTxIdPost.');
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.post<any>(`${this.basePath}/v1.0/wallet/withdraw/request/cancel/${encodeURIComponent(String(txId))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param requestId
     * @param code
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10WalletWithdrawRequestConfirmPost(requestId?: string, code?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public v10WalletWithdrawRequestConfirmPost(requestId?: string, code?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public v10WalletWithdrawRequestConfirmPost(requestId?: string, code?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public v10WalletWithdrawRequestConfirmPost(requestId?: string, code?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (requestId !== undefined) {
            queryParameters = queryParameters.set('requestId', <any>requestId);
        }
        if (code !== undefined) {
            queryParameters = queryParameters.set('code', <any>code);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.post<any>(`${this.basePath}/v1.0/wallet/withdraw/request/confirm`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param authorization JWT access token
     * @param model
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10WalletWithdrawRequestNewPost(authorization: string, model?: CreateWithdrawalRequestModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public v10WalletWithdrawRequestNewPost(authorization: string, model?: CreateWithdrawalRequestModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public v10WalletWithdrawRequestNewPost(authorization: string, model?: CreateWithdrawalRequestModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public v10WalletWithdrawRequestNewPost(authorization: string, model?: CreateWithdrawalRequestModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10WalletWithdrawRequestNewPost.');
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/v1.0/wallet/withdraw/request/new`,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param txId
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10WalletWithdrawRequestResendByTxIdPost(txId: string, authorization: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public v10WalletWithdrawRequestResendByTxIdPost(txId: string, authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public v10WalletWithdrawRequestResendByTxIdPost(txId: string, authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public v10WalletWithdrawRequestResendByTxIdPost(txId: string, authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (txId === null || txId === undefined) {
            throw new Error('Required parameter txId was null or undefined when calling v10WalletWithdrawRequestResendByTxIdPost.');
        }
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10WalletWithdrawRequestResendByTxIdPost.');
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.post<any>(`${this.basePath}/v1.0/wallet/withdraw/request/resend/${encodeURIComponent(String(txId))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
