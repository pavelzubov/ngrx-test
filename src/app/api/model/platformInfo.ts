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
import { AndroidAppVersion } from './androidAppVersion';
import { Facet } from './facet';
import { IOsAppVersion } from './iOsAppVersion';
import { PlatformCurrency } from './platformCurrency';
import { ProgramsInfo } from './programsInfo';


export interface PlatformInfo {
    iOSVersion?: IOsAppVersion;
    androidVersion?: AndroidAppVersion;
    programsFacets?: Array<Facet>;
    fundsFacets?: Array<Facet>;
    programsInfo?: ProgramsInfo;
    currencies?: Array<string>;
    platformCurrencies?: Array<PlatformCurrency>;
}
