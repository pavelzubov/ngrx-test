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
import { BlockchainInfo } from './blockchainInfo';
import { ProgramInfo } from './programInfo';
import { WithdrawalInfo } from './withdrawalInfo';


export interface WalletTransaction {
    id?: string;
    amount?: number;
    amountConverted?: number;
    date?: Date;
    number?: number;
    sourceId?: string;
    sourceType?: WalletTransaction.SourceTypeEnum;
    sourceCurrency?: WalletTransaction.SourceCurrencyEnum;
    sourceProgramInfo?: ProgramInfo;
    sourceBlockchainInfo?: BlockchainInfo;
    sourceWithdrawalInfo?: WithdrawalInfo;
    action?: WalletTransaction.ActionEnum;
    information?: string;
    destinationId?: string;
    destinationType?: WalletTransaction.DestinationTypeEnum;
    destinationCurrency?: WalletTransaction.DestinationCurrencyEnum;
    destinationProgramInfo?: ProgramInfo;
    destinationBlockchainInfo?: BlockchainInfo;
    destinationWithdrawalInfo?: WithdrawalInfo;
}
export namespace WalletTransaction {
    export type SourceTypeEnum = 'Wallet' | 'Program' | 'Fund' | 'ProgramRequest' | 'FundRequest' | 'WithdrawalRequest' | 'PaymentTransaction';
    export const SourceTypeEnum = {
        Wallet: 'Wallet' as SourceTypeEnum,
        Program: 'Program' as SourceTypeEnum,
        Fund: 'Fund' as SourceTypeEnum,
        ProgramRequest: 'ProgramRequest' as SourceTypeEnum,
        FundRequest: 'FundRequest' as SourceTypeEnum,
        WithdrawalRequest: 'WithdrawalRequest' as SourceTypeEnum,
        PaymentTransaction: 'PaymentTransaction' as SourceTypeEnum
    }
    export type SourceCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    export const SourceCurrencyEnum = {
        Undefined: 'Undefined' as SourceCurrencyEnum,
        GVT: 'GVT' as SourceCurrencyEnum,
        ETH: 'ETH' as SourceCurrencyEnum,
        BTC: 'BTC' as SourceCurrencyEnum,
        ADA: 'ADA' as SourceCurrencyEnum,
        USDT: 'USDT' as SourceCurrencyEnum,
        XRP: 'XRP' as SourceCurrencyEnum,
        BCH: 'BCH' as SourceCurrencyEnum,
        LTC: 'LTC' as SourceCurrencyEnum,
        DOGE: 'DOGE' as SourceCurrencyEnum,
        BNB: 'BNB' as SourceCurrencyEnum,
        USD: 'USD' as SourceCurrencyEnum,
        EUR: 'EUR' as SourceCurrencyEnum
    }
    export type ActionEnum = 'Transfer' | 'ProgramOpen' | 'ProgramProfit' | 'ProgramInvest' | 'ProgramWithdrawal' | 'ProgramRefundPartialExecution' | 'ProgramRefundClose' | 'ProgramRequestInvest' | 'ProgramRequestWithdrawal' | 'ProgramRequestCancel';
    export const ActionEnum = {
        Transfer: 'Transfer' as ActionEnum,
        ProgramOpen: 'ProgramOpen' as ActionEnum,
        ProgramProfit: 'ProgramProfit' as ActionEnum,
        ProgramInvest: 'ProgramInvest' as ActionEnum,
        ProgramWithdrawal: 'ProgramWithdrawal' as ActionEnum,
        ProgramRefundPartialExecution: 'ProgramRefundPartialExecution' as ActionEnum,
        ProgramRefundClose: 'ProgramRefundClose' as ActionEnum,
        ProgramRequestInvest: 'ProgramRequestInvest' as ActionEnum,
        ProgramRequestWithdrawal: 'ProgramRequestWithdrawal' as ActionEnum,
        ProgramRequestCancel: 'ProgramRequestCancel' as ActionEnum
    }
    export type DestinationTypeEnum = 'Wallet' | 'Program' | 'Fund' | 'ProgramRequest' | 'FundRequest' | 'WithdrawalRequest' | 'PaymentTransaction';
    export const DestinationTypeEnum = {
        Wallet: 'Wallet' as DestinationTypeEnum,
        Program: 'Program' as DestinationTypeEnum,
        Fund: 'Fund' as DestinationTypeEnum,
        ProgramRequest: 'ProgramRequest' as DestinationTypeEnum,
        FundRequest: 'FundRequest' as DestinationTypeEnum,
        WithdrawalRequest: 'WithdrawalRequest' as DestinationTypeEnum,
        PaymentTransaction: 'PaymentTransaction' as DestinationTypeEnum
    }
    export type DestinationCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    export const DestinationCurrencyEnum = {
        Undefined: 'Undefined' as DestinationCurrencyEnum,
        GVT: 'GVT' as DestinationCurrencyEnum,
        ETH: 'ETH' as DestinationCurrencyEnum,
        BTC: 'BTC' as DestinationCurrencyEnum,
        ADA: 'ADA' as DestinationCurrencyEnum,
        USDT: 'USDT' as DestinationCurrencyEnum,
        XRP: 'XRP' as DestinationCurrencyEnum,
        BCH: 'BCH' as DestinationCurrencyEnum,
        LTC: 'LTC' as DestinationCurrencyEnum,
        DOGE: 'DOGE' as DestinationCurrencyEnum,
        BNB: 'BNB' as DestinationCurrencyEnum,
        USD: 'USD' as DestinationCurrencyEnum,
        EUR: 'EUR' as DestinationCurrencyEnum
    }
}