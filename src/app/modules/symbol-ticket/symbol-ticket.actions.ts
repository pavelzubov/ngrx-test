import { Action } from '@ngrx/store';
import { PlatformStatistic, ProgramsList } from '../../api';

export enum ActionTypes {
    GetSymbolTicketSocket = '[Socket] Get symbol ticket Socket',
    GetSymbolTicketSocketRequest = '[Socket] Get symbol ticket Socket Request',
    GetSymbolTicketSocketSuccess = '[Socket] Get symbol ticket Socket Success'
}

export class GetSymbolTicketSocket implements Action {
    readonly type = ActionTypes.GetSymbolTicketSocket;
    constructor(public payload: any) {}
}

export class GetSymbolTicketSocketRequest implements Action {
    readonly type = ActionTypes.GetSymbolTicketSocketRequest;
    constructor(public payload: any) {}
}

export class GetSymbolTicketSocketSuccess implements Action {
    readonly type = ActionTypes.GetSymbolTicketSocketSuccess;
    public payload: any;
}

export interface EffectAction {
    type: string;
    payload: any;
}

export type SymbolTicketActions =
    | GetSymbolTicketSocketRequest
    | GetSymbolTicketSocketSuccess
    | GetSymbolTicketSocket;
