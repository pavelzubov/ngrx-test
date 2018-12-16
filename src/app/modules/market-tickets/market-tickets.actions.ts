import { Action } from '@ngrx/store';

export enum ActionTypes {
    GetMarketTicketsSocketRequest = '[Socket] Get market tickets Socket Request',
    GetMarketTicketsSocketSuccess = '[Socket] Get market tickets Socket Success'
}

export class GetMarketTicketsSocketRequest implements Action {
    readonly type = ActionTypes.GetMarketTicketsSocketRequest;
    constructor(public payload: any) {}
}

export class GetMarketTicketsSocketSuccess implements Action {
    readonly type = ActionTypes.GetMarketTicketsSocketSuccess;
    public payload: any;
}

export interface EffectAction {
    type: string;
    payload: any;
}

export type MarketTicketsActions = GetMarketTicketsSocketRequest | GetMarketTicketsSocketSuccess;
