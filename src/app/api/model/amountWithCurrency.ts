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


export interface AmountWithCurrency {
    amount?: number;
    currency?: AmountWithCurrency.CurrencyEnum;
}
export namespace AmountWithCurrency {
    export type CurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    export const CurrencyEnum = {
        Undefined: 'Undefined' as CurrencyEnum,
        GVT: 'GVT' as CurrencyEnum,
        ETH: 'ETH' as CurrencyEnum,
        BTC: 'BTC' as CurrencyEnum,
        ADA: 'ADA' as CurrencyEnum,
        USDT: 'USDT' as CurrencyEnum,
        XRP: 'XRP' as CurrencyEnum,
        BCH: 'BCH' as CurrencyEnum,
        LTC: 'LTC' as CurrencyEnum,
        DOGE: 'DOGE' as CurrencyEnum,
        BNB: 'BNB' as CurrencyEnum,
        USD: 'USD' as CurrencyEnum,
        EUR: 'EUR' as CurrencyEnum
    }
}
