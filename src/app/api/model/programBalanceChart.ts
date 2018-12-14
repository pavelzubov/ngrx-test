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
import { ProgramBalanceChartElement } from './programBalanceChartElement';


export interface ProgramBalanceChart {
    programCurrencyBalance?: number;
    programCurrency?: ProgramBalanceChart.ProgramCurrencyEnum;
    balanceChart?: Array<ProgramBalanceChartElement>;
    gvtBalance?: number;
}
export namespace ProgramBalanceChart {
    export type ProgramCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    export const ProgramCurrencyEnum = {
        Undefined: 'Undefined' as ProgramCurrencyEnum,
        GVT: 'GVT' as ProgramCurrencyEnum,
        ETH: 'ETH' as ProgramCurrencyEnum,
        BTC: 'BTC' as ProgramCurrencyEnum,
        ADA: 'ADA' as ProgramCurrencyEnum,
        USDT: 'USDT' as ProgramCurrencyEnum,
        XRP: 'XRP' as ProgramCurrencyEnum,
        BCH: 'BCH' as ProgramCurrencyEnum,
        LTC: 'LTC' as ProgramCurrencyEnum,
        DOGE: 'DOGE' as ProgramCurrencyEnum,
        BNB: 'BNB' as ProgramCurrencyEnum,
        USD: 'USD' as ProgramCurrencyEnum,
        EUR: 'EUR' as ProgramCurrencyEnum
    }
}