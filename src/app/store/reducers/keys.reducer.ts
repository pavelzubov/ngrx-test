import { KeyActionTypes } from '../actions/keys.actions';
export interface KeysState {
    public: string;
    private: string;
}

export const initialState: KeysState = {
    public: 'z8typTMw83wHM3asa6SBPZh81tdPwBVbLJc5o32dGxwDcExL9RSmcmn4McNWVcsL',
    private: null
};

export function keysReducer(state = initialState, action: any): KeysState {
    switch (action.type) {
        case KeyActionTypes.ChangePrivateKeyRequest:
            return { ...state, private: action.payload };
        default:
            return state;
    }
}
