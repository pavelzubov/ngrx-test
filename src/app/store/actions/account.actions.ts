import { Action } from '@ngrx/store';

export enum AccountActionTypes {
    GetAccountInformationRequest = '[Accounts] Get account information Request',
    GetAccountInformationSuccess = '[Accounts] Get account information Success',
    GetAccountInformationFail = '[Accounts] Get account information Fail',
    GetOpenOrdersRequest = '[Accounts] Get open orders Request',
    GetOpenOrdersSuccess = '[Accounts] Get open orders Success',
    GetOpenOrdersFail = '[Accounts] Get open orders Fail',
    GetAllOrdersRequest = '[Accounts] Get All orders Request',
    GetAllOrdersSuccess = '[Accounts] Get All orders Success',
    GetAllOrdersFail = '[Accounts] Get All orders Fail'
}

export class GetAccountInformationRequest implements Action {
    readonly type = AccountActionTypes.GetAccountInformationRequest;
    public payload: string;
}
export class GetOpenOrdersRequest implements Action {
    readonly type = AccountActionTypes.GetOpenOrdersRequest;
    constructor(public payload: string = null) {}
}
export class GetAllOrdersRequest implements Action {
    readonly type = AccountActionTypes.GetAllOrdersRequest;
    constructor(public payload: string = null) {}
}
export interface EffectAction {
    type: string;
    payload: any;
}
