import { Action } from '@ngrx/store';

export enum DepthActionTypes {
    GetSymbolDepthSocketRequest = '[Socket] Get symbol depth Socket Request',
    GetSymbolDepthSocketSuccess = '[Socket] Get symbol depth Socket Success'
}

export class GetSymbolDepthSocketRequest implements Action {
    readonly type = DepthActionTypes.GetSymbolDepthSocketRequest;
    constructor(public payload: any) {}
}

export class GetSymbolDepthSocketSuccess implements Action {
    readonly type = DepthActionTypes.GetSymbolDepthSocketSuccess;
    public payload: any;
}

export interface EffectAction {
    type: string;
    payload: any;
}

export type SymbolDepthActions = GetSymbolDepthSocketRequest | GetSymbolDepthSocketSuccess;
