import { Action } from '@ngrx/store';

export enum TrackerArrActionTypes {
    GetTrackerArrSocketRequest = '[Socket] Get tracker arr Socket Request',
    GetTrackerArrSocketSuccess = '[Socket] Get tracker arr Socket Success'
}

export class GetTrackerArrSocketRequest implements Action {
    readonly type = TrackerArrActionTypes.GetTrackerArrSocketRequest;
    constructor(public payload: any) {}
}

export class GetTrackerArrSocketSuccess implements Action {
    readonly type = TrackerArrActionTypes.GetTrackerArrSocketSuccess;
    public payload: any;
}

export interface EffectAction {
    type: string;
    payload: any;
}

export type TrackerArrActions = GetTrackerArrSocketRequest | GetTrackerArrSocketSuccess;
