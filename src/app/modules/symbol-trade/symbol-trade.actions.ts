import { Action } from '@ngrx/store';

export enum TradeActionTypes {
    GetSymbolTradeSocket = '[Socket] Get symbol trade Socket ',
    GetSymbolTradeSocketRequest = '[Socket] Get symbol trade Socket Request',
    GetSymbolTradeSocketSuccess = '[Socket] Get symbol trade Socket Success'
}

export class GetSymbolTradeSocket implements Action {
    readonly type = TradeActionTypes.GetSymbolTradeSocket;
    constructor(public payload: any) {}
}

export class GetSymbolTradeSocketRequest implements Action {
    readonly type = TradeActionTypes.GetSymbolTradeSocketRequest;
    constructor(public payload: any) {}
}

export class GetSymbolTradeSocketSuccess implements Action {
    readonly type = TradeActionTypes.GetSymbolTradeSocketSuccess;
    public payload: any;
}

export interface EffectAction {
    type: string;
    payload: any;
}

export type SymbolTradeActions =
    | GetSymbolTradeSocketRequest
    | GetSymbolTradeSocketSuccess
    | GetSymbolTradeSocket;
