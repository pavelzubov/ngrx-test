import {PlatformActions, ActionTypes} from '../actions/platform.actions';
import {PlatformStatistic} from '../../api';

export interface PlatformState {
  statistic: PlatformStatistic;
}

export const initialState: PlatformState = {statistic: {}};

export function platformReducer(state = initialState, action: PlatformActions): PlatformState {
  switch (action.type) {
    case ActionTypes.GetStatisticsSuccess:
      return {statistic: action.payload};
    default:
      return state;
  }
}

export const getStatistics = (state: PlatformState) => state.statistic;
