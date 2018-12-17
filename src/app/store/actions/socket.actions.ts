import { Action } from '@ngrx/store';
import {
    GetTrackerArrSocketRequest,
    GetTrackerArrSocketSuccess,
    TrackerArrActionTypes
} from '../../modules/tracker-arr/tracker-arr.actions';

export enum ActionTypes {
    GetChainSocketRequest = '[Socket] Get chain Socket Request',
    GetChainSocketSuccess = '[Socket] Get chain Socket Success'
}

export class GetChainSocketRequest implements Action {
    readonly type = ActionTypes.GetChainSocketRequest;
    constructor(public payload: any) {}
}

export class GetChainSocketSuccess implements Action {
    readonly type = ActionTypes.GetChainSocketSuccess;
    public payload: any;
}

export interface EffectAction {
    type: string;
    payload: any;
}

export type SocketActions = GetChainSocketRequest | GetChainSocketSuccess;
