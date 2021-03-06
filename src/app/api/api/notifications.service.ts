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
import { FundNotificationSettingList } from '../model/fundNotificationSettingList';
import { ManagerNotificationSettingList } from '../model/managerNotificationSettingList';
import { NotificationList } from '../model/notificationList';
import { NotificationSettingList } from '../model/notificationSettingList';
import { ProgramNotificationSettingList } from '../model/programNotificationSettingList';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class NotificationsService {

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
     * User notifications
     *
     * @param authorization JWT access token
     * @param skip
     * @param take
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10NotificationsGet(authorization: string, skip?: number, take?: number, observe?: 'body', reportProgress?: boolean): Observable<NotificationList>;
    public v10NotificationsGet(authorization: string, skip?: number, take?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NotificationList>>;
    public v10NotificationsGet(authorization: string, skip?: number, take?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NotificationList>>;
    public v10NotificationsGet(authorization: string, skip?: number, take?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10NotificationsGet.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (skip !== undefined) {
            queryParameters = queryParameters.set('skip', <any>skip);
        }
        if (take !== undefined) {
            queryParameters = queryParameters.set('take', <any>take);
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

        return this.httpClient.get<NotificationList>(`${this.basePath}/v1.0/notifications`,
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
     * Unread notifications count
     *
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10NotificationsNewGet(authorization: string, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public v10NotificationsNewGet(authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public v10NotificationsNewGet(authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public v10NotificationsNewGet(authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10NotificationsNewGet.');
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

        return this.httpClient.get<number>(`${this.basePath}/v1.0/notifications/new`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Add new setting
     *
     * @param authorization JWT access token
     * @param assetId
     * @param managerId
     * @param type
     * @param conditionType
     * @param conditionAmount
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10NotificationsSettingsAddPost(authorization: string, assetId?: string, managerId?: string, type?: string, conditionType?: string, conditionAmount?: number, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public v10NotificationsSettingsAddPost(authorization: string, assetId?: string, managerId?: string, type?: string, conditionType?: string, conditionAmount?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public v10NotificationsSettingsAddPost(authorization: string, assetId?: string, managerId?: string, type?: string, conditionType?: string, conditionAmount?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public v10NotificationsSettingsAddPost(authorization: string, assetId?: string, managerId?: string, type?: string, conditionType?: string, conditionAmount?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10NotificationsSettingsAddPost.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (assetId !== undefined) {
            queryParameters = queryParameters.set('AssetId', <any>assetId);
        }
        if (managerId !== undefined) {
            queryParameters = queryParameters.set('ManagerId', <any>managerId);
        }
        if (type !== undefined) {
            queryParameters = queryParameters.set('Type', <any>type);
        }
        if (conditionType !== undefined) {
            queryParameters = queryParameters.set('ConditionType', <any>conditionType);
        }
        if (conditionAmount !== undefined) {
            queryParameters = queryParameters.set('ConditionAmount', <any>conditionAmount);
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

        return this.httpClient.post<string>(`${this.basePath}/v1.0/notifications/settings/add`,
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
     * Enable/disable setting
     *
     * @param id
     * @param enable
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10NotificationsSettingsByIdByEnablePost(id: string, enable: boolean, authorization: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public v10NotificationsSettingsByIdByEnablePost(id: string, enable: boolean, authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public v10NotificationsSettingsByIdByEnablePost(id: string, enable: boolean, authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public v10NotificationsSettingsByIdByEnablePost(id: string, enable: boolean, authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v10NotificationsSettingsByIdByEnablePost.');
        }
        if (enable === null || enable === undefined) {
            throw new Error('Required parameter enable was null or undefined when calling v10NotificationsSettingsByIdByEnablePost.');
        }
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10NotificationsSettingsByIdByEnablePost.');
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

        return this.httpClient.post<string>(`${this.basePath}/v1.0/notifications/settings/${encodeURIComponent(String(id))}/${encodeURIComponent(String(enable))}`,
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
     * User settings for fund
     *
     * @param id
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10NotificationsSettingsFundsByIdGet(id: string, authorization: string, observe?: 'body', reportProgress?: boolean): Observable<FundNotificationSettingList>;
    public v10NotificationsSettingsFundsByIdGet(id: string, authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FundNotificationSettingList>>;
    public v10NotificationsSettingsFundsByIdGet(id: string, authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FundNotificationSettingList>>;
    public v10NotificationsSettingsFundsByIdGet(id: string, authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v10NotificationsSettingsFundsByIdGet.');
        }
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10NotificationsSettingsFundsByIdGet.');
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

        return this.httpClient.get<FundNotificationSettingList>(`${this.basePath}/v1.0/notifications/settings/funds/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * User settings
     *
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10NotificationsSettingsGet(authorization: string, observe?: 'body', reportProgress?: boolean): Observable<NotificationSettingList>;
    public v10NotificationsSettingsGet(authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NotificationSettingList>>;
    public v10NotificationsSettingsGet(authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NotificationSettingList>>;
    public v10NotificationsSettingsGet(authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10NotificationsSettingsGet.');
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

        return this.httpClient.get<NotificationSettingList>(`${this.basePath}/v1.0/notifications/settings`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * User settings for manager
     *
     * @param id
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10NotificationsSettingsManagersByIdGet(id: string, authorization: string, observe?: 'body', reportProgress?: boolean): Observable<ManagerNotificationSettingList>;
    public v10NotificationsSettingsManagersByIdGet(id: string, authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ManagerNotificationSettingList>>;
    public v10NotificationsSettingsManagersByIdGet(id: string, authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ManagerNotificationSettingList>>;
    public v10NotificationsSettingsManagersByIdGet(id: string, authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v10NotificationsSettingsManagersByIdGet.');
        }
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10NotificationsSettingsManagersByIdGet.');
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

        return this.httpClient.get<ManagerNotificationSettingList>(`${this.basePath}/v1.0/notifications/settings/managers/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * User settings for program
     *
     * @param id
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10NotificationsSettingsProgramsByIdGet(id: string, authorization: string, observe?: 'body', reportProgress?: boolean): Observable<ProgramNotificationSettingList>;
    public v10NotificationsSettingsProgramsByIdGet(id: string, authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ProgramNotificationSettingList>>;
    public v10NotificationsSettingsProgramsByIdGet(id: string, authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ProgramNotificationSettingList>>;
    public v10NotificationsSettingsProgramsByIdGet(id: string, authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v10NotificationsSettingsProgramsByIdGet.');
        }
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10NotificationsSettingsProgramsByIdGet.');
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

        return this.httpClient.get<ProgramNotificationSettingList>(`${this.basePath}/v1.0/notifications/settings/programs/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Remove setting
     *
     * @param id
     * @param authorization JWT access token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v10NotificationsSettingsRemoveByIdPost(id: string, authorization: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public v10NotificationsSettingsRemoveByIdPost(id: string, authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public v10NotificationsSettingsRemoveByIdPost(id: string, authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public v10NotificationsSettingsRemoveByIdPost(id: string, authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v10NotificationsSettingsRemoveByIdPost.');
        }
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v10NotificationsSettingsRemoveByIdPost.');
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

        return this.httpClient.post<any>(`${this.basePath}/v1.0/notifications/settings/remove/${encodeURIComponent(String(id))}`,
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
