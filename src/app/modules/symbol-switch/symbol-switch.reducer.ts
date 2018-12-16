import { SymbolSwitchActions, ActionTypes } from './symbol-switch.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: string = 'bnbbtc';

export function symbolSwitchReducer(
    state = initialState,
    action: SymbolSwitchActions
): any {
    switch (action.type) {
        case ActionTypes.ChangeSymbol:
            return action.payload;
        default:
            return state;
    }
}
export const getSymbolSwitch = createFeatureSelector('symbolSwitcher');
export const getSymbolSwitchSelector = createSelector(getSymbolSwitch);
