import {Action} from '@ngrx/store';
import {PlatformStatistic, ProgramsList} from '../../api';

export enum ActionTypes {
  GetStatisticsRequest = '[Platform] Get Statistics Request',
  GetStatisticsSuccess = '[Platform] Get Statistics Success',
  GetStatisticsFailure = '[Platform] Get Statistics Failure'
}

export class GetStatisticsRequest implements Action {
  readonly type = ActionTypes.GetStatisticsRequest;
  public payload: PlatformStatistic;
}

export class GetStatisticsSuccess implements Action {
  readonly type = ActionTypes.GetStatisticsSuccess;
  public payload: PlatformStatistic;
}

export class GetStatisticsFailure implements Action {
  readonly type = ActionTypes.GetStatisticsFailure;
  public payload: PlatformStatistic;
}

export type PlatformActions = GetStatisticsRequest | GetStatisticsSuccess | GetStatisticsFailure;
