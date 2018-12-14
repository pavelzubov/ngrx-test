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


export interface FundProfitChart {
    totalUsdProfit?: number;
    timeframeUsdProfit?: number;
    rebalances?: number;
    creationDate?: Date;
    profitPercent?: number;
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
