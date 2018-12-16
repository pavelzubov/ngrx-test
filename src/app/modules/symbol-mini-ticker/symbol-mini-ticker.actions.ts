import { Action } from '@ngrx/store';
import { PlatformStatistic, ProgramsList } from '../../api';

export enum ActionTypes {
    GetSymbolMiniTickerSocket = '[Socket] Get symbol mini ticker Socket',
    GetSymbolMiniTickerSocketRequest = '[Socket] Get symbol mini ticker Socket Request',
    GetSymbolMiniTickerSocketSuccess = '[Socket] Get symbol mini ticker Socket Success'
}

export class GetSymbolMiniTickerSocket implements Action {
    readonly type = ActionTypes.GetSymbolMiniTickerSocket;
    constructor(public payload: any) {}
}

export class GetSymbolMiniTickerSocketRequest implements Action {
    readonly type = ActionTypes.GetSymbolMiniTickerSocketRequest;
    constructor(public payload: any) {}
}

export class GetSymbolMiniTickerSocketSuccess implements Action {
    readonly type = ActionTypes.GetSymbolMiniTickerSocketSuccess;
    public payload: any;
}

export interface EffectAction {
    type: string;
    payload: any;
}

export type SymbolMiniTickerActions =
    | GetSymbolMiniTickerSocketRequest
    | GetSymbolMiniTickerSocketSuccess
    | GetSymbolMiniTickerSocket;
