import { Action } from '@ngrx/store';

export enum KeyActionTypes {
    ChangePrivateKeyRequest = '[Keys] Change private key Request'
}

export class ChangePrivateKeyRequest implements Action {
    readonly type = KeyActionTypes.ChangePrivateKeyRequest;
    constructor(public payload: string) {}
}

export interface EffectAction {
    type: string;
    payload: any;
}

export type KeysActions = ChangePrivateKeyRequest;
