import {Action} from '@ngrx/store';
import * as programsAction from '../actions/programs';
import {ProgramsList} from '../../api';

export interface State {
  data: ProgramsList;
}

export const initialState: State = {
  data: null
};

export function reducer(state = initialState,
                        action: programsAction.Action) {
  switch (action.type) {
    case programsAction.GET_ALL: {
      const programs: ProgramsList = action.payload;
      return {
        ...state,
        data: programs
      };
    }
    default:
      return state;
  }
}

export const getAll = (state: State) => state.data;
