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
import { NotificationSettingViewModel } from './notificationSettingViewModel';


export interface FundNotificationSettingList {
    assetId?: string;
    title?: string;
    url?: string;
    logo?: string;
    settingsGeneral?: Array<NotificationSettingViewModel>;
}
