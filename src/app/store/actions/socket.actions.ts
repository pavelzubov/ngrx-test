import { Action } from '@ngrx/store';

export enum ActionTypes {}

export interface EffectAction {
    type: string;
    payload: any;
}
