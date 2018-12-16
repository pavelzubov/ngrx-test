import { Action } from '@ngrx/store';

export enum ActionTypes {
    GetTrackerArrSocketRequest = '[Socket] Get tracker arr Socket Request',
    GetTrackerArrSocketSuccess = '[Socket] Get tracker arr Socket Success'
}

export class GetTrackerArrSocketRequest implements Action {
    readonly type = ActionTypes.GetTrackerArrSocketRequest;
    constructor(public payload: any) {}
}

export class GetTrackerArrSocketSuccess implements Action {
    readonly type = ActionTypes.GetTrackerArrSocketSuccess;
    public payload: any;
}

export interface EffectAction {
    type: string;
    payload: any;
}

export type TrackerArrActions = GetTrackerArrSocketRequest | GetTrackerArrSocketSuccess;
