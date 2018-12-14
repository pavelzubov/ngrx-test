import { ActionReducerMap, createSelector, createFeatureSelector,
  ActionReducer, MetaReducer } from '@ngrx/store';
import * as platform from './platform.reducer';
import * as programs from './programs.reducer';

export interface State {
  platform: platform.PlatformState;
  programs: programs.ProgramsState;
}
export const reducers: ActionReducerMap<State> = {
  platform: platform.platformReducer,
  programs: programs.programsReducer,
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
