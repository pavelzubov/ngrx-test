import {Action} from '@ngrx/store';
import {PlatformStatistic, ProgramsList} from '../../api';

export enum ActionTypes {
    GetMiniTrackerArrSocketRequest = '[Socket] Get mini Tracker Arr Socket Request',
    GetMiniTrackerArrSocketSuccess = '[Socket] Get mini Tracker Arr Socket Success',
    GetAllMarketTicketsSocketRequest = '[Socket] Get all market tickets Socket Request',
    GetAllMarketTicketsSocketSuccess = '[Socket] Get all market tickets Socket Success',
    GetSymbolTradeSocketRequest = '[Socket] Get symbol trade Socket Request',
    GetSymbolTradeSocketSuccess = '[Socket] Get symbol trade Socket Success',
    GetSymbolTicketSocketRequest = '[Socket] Get symbol ticket Socket Request',
    GetSymbolTicketSocketSuccess = '[Socket] Get symbol ticket Socket Success',
    GetSymbolMiniTickerSocketRequest = '[Socket] Get symbol mini ticker Socket Request',
    GetSymbolMiniTickerSocketSuccess = '[Socket] Get symbol mini ticker Socket Success',
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

export class GetSymbolTradeSocketRequest implements Action {
    readonly type = ActionTypes.GetSymbolTradeSocketRequest;
    public payload: any;
}

export class GetSymbolTradeSocketSuccess implements Action {
    readonly type = ActionTypes.GetSymbolTradeSocketSuccess;
    public payload: any;
}

export class GetSymbolTicketSocketRequest implements Action {
    readonly type = ActionTypes.GetSymbolTicketSocketRequest;
    public payload: any;
}

export class GetSymbolTicketSocketSuccess implements Action {
    readonly type = ActionTypes.GetSymbolTicketSocketSuccess;
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


export type SocketActions =
    GetMiniTrackerArrSocketRequest |
    GetMiniTrackerArrSocketSuccess |
    GetAllMarketTicketsSocketRequest |
    GetAllMarketTicketsSocketSuccess |
    GetSymbolTradeSocketRequest |
    GetSymbolTradeSocketSuccess |
    GetSymbolTicketSocketRequest |
    GetSymbolTicketSocketSuccess |
    GetSymbolMiniTickerSocketRequest |
    GetSymbolMiniTickerSocketSuccess;
