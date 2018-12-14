import { ActionReducerMap, createSelector, createFeatureSelector,
  ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromPrograms from './programs';
export interface State {
  programs: fromPrograms.State;
}
export const reducers: ActionReducerMap<State> = {
  programs: fromPrograms.reducer
};
export function logger(reducer: ActionReducer<State>):
  ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = [logger];
export const getProgramState =
  createFeatureSelector<fromPrograms.State>('programs');
export const getPrograms = createSelector(
  getProgramState,
  fromPrograms.getAll,
);
