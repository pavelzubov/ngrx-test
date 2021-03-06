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

import { ErrorViewModel } from '../model/errorViewModel';
import { FundAssetsListInfo } from '../model/fundAssetsListInfo';
import { FundBalanceChart } from '../model/fundBalanceChart';
import { FundDetailsFull } from '../model/fundDetailsFull';
import { FundProfitChart } from '../model/fundProfitChart';
import { FundsList } from '../model/fundsList';
import { PlatformAssets } from '../model/platformAssets';
import { ProgramSets } from '../model/programSets';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class FundsService {

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
     * Get all supported assets for funds
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10FundsAssetsGet(observe?: 'body', reportProgress?: boolean): Observable<PlatformAssets>;
    public v10FundsAssetsGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PlatformAssets>>;
    public v10FundsAssetsGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PlatformAssets>>;
    public v10FundsAssetsGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<PlatformAssets>(`${this.basePath}/v1.0/funds/assets`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Fund assets info
     *
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10FundsByIdAssetsGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<FundAssetsListInfo>;
    public v10FundsByIdAssetsGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FundAssetsListInfo>>;
    public v10FundsByIdAssetsGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FundAssetsListInfo>>;
    public v10FundsByIdAssetsGet(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v10FundsByIdAssetsGet.');
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

        return this.httpClient.get<FundAssetsListInfo>(`${this.basePath}/v1.0/funds/${encodeURIComponent(String(id))}/assets`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Fund balance chart
     *
     * @param id
     * @param dateFrom
     * @param dateTo
     * @param maxPointCount
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10FundsByIdChartsBalanceGet(id: string, dateFrom?: Date, dateTo?: Date, maxPointCount?: number, observe?: 'body', reportProgress?: boolean): Observable<FundBalanceChart>;
    public v10FundsByIdChartsBalanceGet(id: string, dateFrom?: Date, dateTo?: Date, maxPointCount?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FundBalanceChart>>;
    public v10FundsByIdChartsBalanceGet(id: string, dateFrom?: Date, dateTo?: Date, maxPointCount?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FundBalanceChart>>;
    public v10FundsByIdChartsBalanceGet(id: string, dateFrom?: Date, dateTo?: Date, maxPointCount?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v10FundsByIdChartsBalanceGet.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (dateFrom !== undefined) {
            queryParameters = queryParameters.set('DateFrom', <any>dateFrom.toISOString());
        }
        if (dateTo !== undefined) {
            queryParameters = queryParameters.set('DateTo', <any>dateTo.toISOString());
        }
        if (maxPointCount !== undefined) {
            queryParameters = queryParameters.set('MaxPointCount', <any>maxPointCount);
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

        return this.httpClient.get<FundBalanceChart>(`${this.basePath}/v1.0/funds/${encodeURIComponent(String(id))}/charts/balance`,
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
     * Fund profit chart
     *
     * @param id
     * @param dateFrom
     * @param dateTo
     * @param maxPointCount
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10FundsByIdChartsProfitGet(id: string, dateFrom?: Date, dateTo?: Date, maxPointCount?: number, observe?: 'body', reportProgress?: boolean): Observable<FundProfitChart>;
    public v10FundsByIdChartsProfitGet(id: string, dateFrom?: Date, dateTo?: Date, maxPointCount?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FundProfitChart>>;
    public v10FundsByIdChartsProfitGet(id: string, dateFrom?: Date, dateTo?: Date, maxPointCount?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FundProfitChart>>;
    public v10FundsByIdChartsProfitGet(id: string, dateFrom?: Date, dateTo?: Date, maxPointCount?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v10FundsByIdChartsProfitGet.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (dateFrom !== undefined) {
            queryParameters = queryParameters.set('DateFrom', <any>dateFrom.toISOString());
        }
        if (dateTo !== undefined) {
            queryParameters = queryParameters.set('DateTo', <any>dateTo.toISOString());
        }
        if (maxPointCount !== undefined) {
            queryParameters = queryParameters.set('MaxPointCount', <any>maxPointCount);
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

        return this.httpClient.get<FundProfitChart>(`${this.basePath}/v1.0/funds/${encodeURIComponent(String(id))}/charts/profit`,
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
     * Add to favorites
     *
     * @param id
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10FundsByIdFavoriteAddPost(id: string, authorization: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public v10FundsByIdFavoriteAddPost(id: string, authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public v10FundsByIdFavoriteAddPost(id: string, authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public v10FundsByIdFavoriteAddPost(id: string, authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v10FundsByIdFavoriteAddPost.');
        }
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10FundsByIdFavoriteAddPost.');
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

        return this.httpClient.post<any>(`${this.basePath}/v1.0/funds/${encodeURIComponent(String(id))}/favorite/add`,
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
     * Remove from favorites
     *
     * @param id
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10FundsByIdFavoriteRemovePost(id: string, authorization: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public v10FundsByIdFavoriteRemovePost(id: string, authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public v10FundsByIdFavoriteRemovePost(id: string, authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public v10FundsByIdFavoriteRemovePost(id: string, authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v10FundsByIdFavoriteRemovePost.');
        }
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10FundsByIdFavoriteRemovePost.');
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

        return this.httpClient.post<any>(`${this.basePath}/v1.0/funds/${encodeURIComponent(String(id))}/favorite/remove`,
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
     * Funds details
     *
     * @param id
     * @param authorization
     * @param currencySecondary
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10FundsByIdGet(id: string, authorization?: string, currencySecondary?: string, observe?: 'body', reportProgress?: boolean): Observable<FundDetailsFull>;
    public v10FundsByIdGet(id: string, authorization?: string, currencySecondary?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FundDetailsFull>>;
    public v10FundsByIdGet(id: string, authorization?: string, currencySecondary?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FundDetailsFull>>;
    public v10FundsByIdGet(id: string, authorization?: string, currencySecondary?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v10FundsByIdGet.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (currencySecondary !== undefined) {
            queryParameters = queryParameters.set('currencySecondary', <any>currencySecondary);
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

        return this.httpClient.get<FundDetailsFull>(`${this.basePath}/v1.0/funds/${encodeURIComponent(String(id))}`,
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
     * Funds list
     *
     * @param authorization
     * @param sorting
     * @param currencySecondary
     * @param statisticDateFrom
     * @param statisticDateTo
     * @param chartPointsCount
     * @param mask
     * @param facetId
     * @param isFavorite
     * @param isEnabled
     * @param ids
     * @param managerId
     * @param programManagerId
     * @param skip
     * @param take
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10FundsGet(authorization?: string, sorting?: string, currencySecondary?: string, statisticDateFrom?: Date, statisticDateTo?: Date, chartPointsCount?: number, mask?: string, facetId?: string, isFavorite?: boolean, isEnabled?: boolean, ids?: Array<string>, managerId?: string, programManagerId?: string, skip?: number, take?: number, observe?: 'body', reportProgress?: boolean): Observable<FundsList>;
    public v10FundsGet(authorization?: string, sorting?: string, currencySecondary?: string, statisticDateFrom?: Date, statisticDateTo?: Date, chartPointsCount?: number, mask?: string, facetId?: string, isFavorite?: boolean, isEnabled?: boolean, ids?: Array<string>, managerId?: string, programManagerId?: string, skip?: number, take?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FundsList>>;
    public v10FundsGet(authorization?: string, sorting?: string, currencySecondary?: string, statisticDateFrom?: Date, statisticDateTo?: Date, chartPointsCount?: number, mask?: string, facetId?: string, isFavorite?: boolean, isEnabled?: boolean, ids?: Array<string>, managerId?: string, programManagerId?: string, skip?: number, take?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FundsList>>;
    public v10FundsGet(authorization?: string, sorting?: string, currencySecondary?: string, statisticDateFrom?: Date, statisticDateTo?: Date, chartPointsCount?: number, mask?: string, facetId?: string, isFavorite?: boolean, isEnabled?: boolean, ids?: Array<string>, managerId?: string, programManagerId?: string, skip?: number, take?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (sorting !== undefined) {
            queryParameters = queryParameters.set('Sorting', <any>sorting);
        }
        if (currencySecondary !== undefined) {
            queryParameters = queryParameters.set('CurrencySecondary', <any>currencySecondary);
        }
        if (statisticDateFrom !== undefined) {
            queryParameters = queryParameters.set('StatisticDateFrom', <any>statisticDateFrom.toISOString());
        }
        if (statisticDateTo !== undefined) {
            queryParameters = queryParameters.set('StatisticDateTo', <any>statisticDateTo.toISOString());
        }
        if (chartPointsCount !== undefined) {
            queryParameters = queryParameters.set('ChartPointsCount', <any>chartPointsCount);
        }
        if (mask !== undefined) {
            queryParameters = queryParameters.set('Mask', <any>mask);
        }
        if (facetId !== undefined) {
            queryParameters = queryParameters.set('FacetId', <any>facetId);
        }
        if (isFavorite !== undefined) {
            queryParameters = queryParameters.set('IsFavorite', <any>isFavorite);
        }
        if (isEnabled !== undefined) {
            queryParameters = queryParameters.set('IsEnabled', <any>isEnabled);
        }
        if (ids) {
            ids.forEach((element) => {
                queryParameters = queryParameters.append('Ids', <any>element);
            })
        }
        if (managerId !== undefined) {
            queryParameters = queryParameters.set('ManagerId', <any>managerId);
        }
        if (programManagerId !== undefined) {
            queryParameters = queryParameters.set('ProgramManagerId', <any>programManagerId);
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

        return this.httpClient.get<FundsList>(`${this.basePath}/v1.0/funds`,
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
     * Fund sets
     *
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10FundsSetsGet(authorization: string, observe?: 'body', reportProgress?: boolean): Observable<ProgramSets>;
    public v10FundsSetsGet(authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ProgramSets>>;
    public v10FundsSetsGet(authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ProgramSets>>;
    public v10FundsSetsGet(authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10FundsSetsGet.');
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

        return this.httpClient.get<ProgramSets>(`${this.basePath}/v1.0/funds/sets`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
