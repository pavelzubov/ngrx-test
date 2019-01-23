import { KeyActionTypes } from '../actions/keys.actions';
export interface KeysState {
    public: string;
    private: string;
}

const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
};

export const initialState: KeysState = {
    // public: 'z8typTMw83wHM3asa6SBPZh81tdPwBVbLJc5o32dGxwDcExL9RSmcmn4McNWVcsL',
    public: String(randomInteger(0, 100)),
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
