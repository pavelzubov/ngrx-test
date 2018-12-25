import { Action } from '@ngrx/store';

export enum TradeActionTypes {
    BuyRequest = '[Trade] Buy Request',
    BuySuccess = '[Trade] Buy Success',
    BuyFail = '[Trade] Buy Fail',
    SellRequest = '[Trade] Sell Request',
    SellSuccess = '[Trade] Sell Success',
    SellFail = '[Trade] Sell Fail'
}

export class BuyRequest implements Action {
    readonly type = TradeActionTypes.BuyRequest;
    constructor(public payload: any) {}
}

export class BuySuccess implements Action {
    readonly type = TradeActionTypes.BuySuccess;
    public payload: any;
}

export class BuyFail implements Action {
    readonly type = TradeActionTypes.BuyFail;
    public payload: any;
}

export class SellRequest implements Action {
    readonly type = TradeActionTypes.SellRequest;
    constructor(public payload: any) {}
}

export class SellSuccess implements Action {
    readonly type = TradeActionTypes.SellSuccess;
    public payload: any;
}

export class SellFail implements Action {
    readonly type = TradeActionTypes.SellFail;
    public payload: any;
}

export interface EffectAction {
    type: string;
    payload: any;
}

export type TradeActions =
    | BuyRequest
    | BuySuccess
    | SellRequest
    | SellSuccess
    | BuyFail
    | SellFail;
