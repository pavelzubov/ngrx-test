import { Action } from '@ngrx/store';

export enum AccountActionTypes {
    GetAccountInformationRequest = '[Accounts] Get account information Request',
    GetAccountInformationSuccess = '[Accounts] Get account information Success',
    GetAccountInformationFail = '[Accounts] Get account information Fail',
    GetOpenOrdersRequest = '[Accounts] Get open orders Request',
    GetOpenOrdersSuccess = '[Accounts] Get open orders Success',
    GetOpenOrdersFail = '[Accounts] Get open orders Fail'
}

export class GetAccountInformationRequest implements Action {
    readonly type = AccountActionTypes.GetAccountInformationRequest;
    public payload: string;
}
export class GetAccountInformationSuccess implements Action {
    readonly type = AccountActionTypes.GetAccountInformationSuccess;
    constructor(public payload: string) {}
}
export class GetAccountInformationFail implements Action {
    readonly type = AccountActionTypes.GetAccountInformationFail;
    constructor(public payload: string) {}
}
export class GetOpenOrdersRequest implements Action {
    readonly type = AccountActionTypes.GetOpenOrdersRequest;
    constructor(public payload: string = null) {}
}
export class GetOpenOrdersSuccess implements Action {
    readonly type = AccountActionTypes.GetOpenOrdersSuccess;
    constructor(public payload: string) {}
}
export class GetOpenOrdersFail implements Action {
    readonly type = AccountActionTypes.GetOpenOrdersFail;
    constructor(public payload: string) {}
}

export interface EffectAction {
    type: string;
    payload: any;
}
