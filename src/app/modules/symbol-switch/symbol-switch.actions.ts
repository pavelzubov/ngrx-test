import { Action } from '@ngrx/store';

export enum ActionTypes {
    ChangeSymbol = '[Swithcer] Change symbol'
}

export class ChangeSymbol implements Action {
    readonly type = ActionTypes.ChangeSymbol;
    constructor(public payload: string) {}
}

export type SymbolSwitchActions = ChangeSymbol;
