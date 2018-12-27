import { Action } from '@ngrx/store';

export enum AccountActionTypes {
    GetAccountRequest = '[Accounts] Get account information Request',
    GetAccountSuccess = '[Accounts] Get account information Success',
    GetAccountFail = '[Accounts] Get account information Fail'
}

export class ChangePrivateAccountRequest implements Action {
    readonly type = AccountActionTypes.GetAccountRequest;
    public payload: string;
}
export class ChangePrivateAccountSuccess implements Action {
    readonly type = AccountActionTypes.GetAccountSuccess;
    constructor(public payload: string) {}
}
export class ChangePrivateAccountFail implements Action {
    readonly type = AccountActionTypes.GetAccountFail;
    constructor(public payload: string) {}
}

export interface EffectAction {
    type: string;
    payload: any;
}
export type AccountsActions =
    | ChangePrivateAccountRequest
    | ChangePrivateAccountSuccess
    | ChangePrivateAccountFail;
