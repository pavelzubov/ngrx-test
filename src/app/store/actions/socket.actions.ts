import { Action } from '@ngrx/store';
import {
    GetTrackerArrSocketRequest,
    GetTrackerArrSocketSuccess,
    TrackerArrActionTypes
} from '../../modules/tracker-arr/tracker-arr.actions';

export enum ActionTypes {
    GetChainSocketRequest = '[Socket] Get chain Socket Request',
    GetChainSocketSuccess = '[Socket] Get chain Socket Success',
    GetUserDataStreamRequest = '[Socket] Get user data stream Request',
    GetUserDataStreamSuccess = '[Socket] Get user data stream Success',
    GetUserDataStreamFail = '[Socket] Get user data stream Fail'
}

export class GetChainSocketRequest implements Action {
    readonly type = ActionTypes.GetChainSocketRequest;
    constructor(public payload: any) {}
}
export class GetChainSocketSuccess implements Action {
    readonly type = ActionTypes.GetChainSocketSuccess;
    public payload: any;
}
export class GetUserDataStreamRequest implements Action {
    readonly type = ActionTypes.GetUserDataStreamRequest;
    public payload: any;
}
export class GetUserDataStreamSuccess implements Action {
    readonly type = ActionTypes.GetUserDataStreamSuccess;
    constructor(public payload: any) {}
}
export class GetUserDataStreamFail implements Action {
    readonly type = ActionTypes.GetUserDataStreamFail;
    constructor(public payload: any) {}
}
export interface EffectAction {
    type: string;
    payload: any;
}

export type SocketActions =
    | GetChainSocketRequest
    | GetChainSocketSuccess
    | GetUserDataStreamRequest
    | GetUserDataStreamSuccess
    | GetUserDataStreamFail;
