import {Actions, ActionTypes} from '../actions/programs.actions';
import {PlatformStatistic, ProgramDetails} from '../../api';

export interface ProgramsState {
  programs: ProgramDetails[];
  total: number;
}

export const initialState: ProgramsState = {
  programs: null,
total: null};

export function programsReducer(state = initialState, action: Actions): ProgramsState {
  switch (action.type) {
    case ActionTypes.GetAllSuccess:
      return action.payload;
    default:
      return state;
  }
}
