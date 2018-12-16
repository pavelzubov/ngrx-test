import { Action } from '@ngrx/store';
import { PlatformStatistic, ProgramsList } from '../../api';

export enum ActionTypes {
    GetSymbolDepthSocketRequest = '[Socket] Get symbol depth Socket Request',
    GetSymbolDepthSocketSuccess = '[Socket] Get symbol depth Socket Success'
}

export class GetSymbolDepthSocketRequest implements Action {
    readonly type = ActionTypes.GetSymbolDepthSocketRequest;
    public payload: any;
}

export class GetSymbolDepthSocketSuccess implements Action {
    readonly type = ActionTypes.GetSymbolDepthSocketSuccess;
    public payload: any;
}

export type SocketActions =
    | GetSymbolDepthSocketRequest
    | GetSymbolDepthSocketSuccess;
