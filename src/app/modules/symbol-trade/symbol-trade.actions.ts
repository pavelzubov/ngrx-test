import { Action } from '@ngrx/store';

export enum ActionTypes {
    GetSymbolTradeSocket = '[Socket] Get symbol trade Socket ',
    GetSymbolTradeSocketRequest = '[Socket] Get symbol trade Socket Request',
    GetSymbolTradeSocketSuccess = '[Socket] Get symbol trade Socket Success'
}

export class GetSymbolTradeSocket implements Action {
    readonly type = ActionTypes.GetSymbolTradeSocket;
    constructor(public payload: any) {}
}

export class GetSymbolTradeSocketRequest implements Action {
    readonly type = ActionTypes.GetSymbolTradeSocketRequest;
    constructor(public payload: any) {}
}

export class GetSymbolTradeSocketSuccess implements Action {
    readonly type = ActionTypes.GetSymbolTradeSocketSuccess;
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
