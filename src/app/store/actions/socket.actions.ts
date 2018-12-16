import { Action } from '@ngrx/store';
import { PlatformStatistic, ProgramsList } from '../../api';

export enum ActionTypes {
    GetMiniTrackerArrSocketRequest = '[Socket] Get mini Tracker Arr Socket Request',
    GetMiniTrackerArrSocketSuccess = '[Socket] Get mini Tracker Arr Socket Success',
    GetAllMarketTicketsSocketRequest = '[Socket] Get all market tickets Socket Request',
    GetAllMarketTicketsSocketSuccess = '[Socket] Get all market tickets Socket Success',
    GetSymbolMiniTickerSocketRequest = '[Socket] Get symbol mini ticker Socket Request',
    GetSymbolMiniTickerSocketSuccess = '[Socket] Get symbol mini ticker Socket Success'
}

export class GetMiniTrackerArrSocketRequest implements Action {
    readonly type = ActionTypes.GetMiniTrackerArrSocketRequest;
    public payload: any;
}

export class GetMiniTrackerArrSocketSuccess implements Action {
    readonly type = ActionTypes.GetMiniTrackerArrSocketSuccess;
    public payload: any;
}

export class GetAllMarketTicketsSocketRequest implements Action {
    readonly type = ActionTypes.GetAllMarketTicketsSocketRequest;
    public payload: any;
}

export class GetAllMarketTicketsSocketSuccess implements Action {
    readonly type = ActionTypes.GetAllMarketTicketsSocketSuccess;
    public payload: any;
}

export class GetSymbolMiniTickerSocketRequest implements Action {
    readonly type = ActionTypes.GetSymbolMiniTickerSocketRequest;
    public payload: any;
}

export class GetSymbolMiniTickerSocketSuccess implements Action {
    readonly type = ActionTypes.GetSymbolMiniTickerSocketSuccess;
    public payload: any;
}

export interface EffectAction {
    type: string;
    payload: any;
}

export type SocketActions =
    | GetMiniTrackerArrSocketRequest
    | GetMiniTrackerArrSocketSuccess
    | GetAllMarketTicketsSocketRequest
    | GetAllMarketTicketsSocketSuccess
    | GetSymbolMiniTickerSocketRequest
    | GetSymbolMiniTickerSocketSuccess;
