import { SymbolMiniTickerActions, ActionTypes } from './symbol-mini-ticker.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: any = null;

export function symbolMiniTickerReducer(
    state = initialState,
    action: SymbolMiniTickerActions
): any {
    switch (action.type) {
        case ActionTypes.GetSymbolMiniTickerSocket:
            return action.payload;
        case ActionTypes.GetSymbolMiniTickerSocketSuccess:
            return action.payload;
        default:
            return state;
    }
}

export const getSymbolMiniTicker = createFeatureSelector('symbolMiniTicker');
export const getSymbolMiniTickerSelector = createSelector(getSymbolMiniTicker);
