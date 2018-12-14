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
import { ChartSimple } from './chartSimple';
import { PeriodDate } from './periodDate';


export interface ProgramProfitChart {
    totalProgramCurrencyProfit?: number;
    timeframeProgramCurrencyProfit?: number;
    programCurrency?: ProgramProfitChart.ProgramCurrencyEnum;
    trades?: number;
    successTradesPercent?: number;
    profitFactor?: number;
    pnLChart?: Array<ChartSimple>;
    periods?: Array<PeriodDate>;
    lastPeriodStarts?: Date;
    lastPeriodEnds?: Date;
    equityChart?: Array<ChartSimple>;
    balance?: number;
    investors?: number;
    profitChangePercent?: number;
    sharpeRatio?: number;
    sortinoRatio?: number;
    calmarRatio?: number;
    maxDrawdown?: number;
    totalGvtProfit?: number;
    timeframeGvtProfit?: number;
    rate?: number;
}
export namespace ProgramProfitChart {
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
