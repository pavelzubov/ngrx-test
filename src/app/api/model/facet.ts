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


export interface Facet {
    id?: string;
    title?: string;
    description?: string;
    logo?: string;
    url?: string;
    sortType?: Facet.SortTypeEnum;
}
export namespace Facet {
    export type SortTypeEnum = 'New' | 'Top' | 'WeeklyTop' | 'Popular' | 'ToLevelUp';
    export const SortTypeEnum = {
        New: 'New' as SortTypeEnum,
        Top: 'Top' as SortTypeEnum,
        WeeklyTop: 'WeeklyTop' as SortTypeEnum,
        Popular: 'Popular' as SortTypeEnum,
        ToLevelUp: 'ToLevelUp' as SortTypeEnum
    }
}
