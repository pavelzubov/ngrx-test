import { Action } from '@ngrx/store';

export enum AccountActionTypes {
    GetAccountRequest = '[Accounts] Get account information Request',
    GetAccountSuccess = '[Accounts] Get account information Success',
    GetAccountFail = '[Accounts] Get account information Fail'
}

export class GetAccountInformationRequest implements Action {
    readonly type = AccountActionTypes.GetAccountRequest;
    public payload: string;
}
export class GetAccountInformationSuccess implements Action {
    readonly type = AccountActionTypes.GetAccountSuccess;
    constructor(public payload: string) {}
}
export class GetAccountInformationFail implements Action {
    readonly type = AccountActionTypes.GetAccountFail;
    constructor(public payload: string) {}
}

export interface EffectAction {
    type: string;
    payload: any;
}
export type AccountsActions =
    | GetAccountInformationRequest
    | GetAccountInformationSuccess
    | GetAccountInformationFail;
