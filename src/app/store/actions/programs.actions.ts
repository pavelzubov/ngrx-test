import {Action} from '@ngrx/store';
import {ProgramsList} from '../../api';
import {ProgramsState} from '../reducers/programs.reducer';

export enum ActionTypes {
  GetAll = '[Programs Component] GetAll',
  GetAllSuccess = '[Programs Component] GetAll SUCCESS',
  GetAllFailed = '[Programs Component] GetAll FAILED'
}

export class GetAll implements Action {
  readonly type = ActionTypes.GetAll;
  public payload: ProgramsState;
}

export class GetAllSuccess implements Action {
  readonly type = ActionTypes.GetAllSuccess;
  public payload: ProgramsState;
}

export class GetAllFailed implements Action {
  readonly type = ActionTypes.GetAllFailed;
  public payload: ProgramsState;
}

export type Actions = GetAll | GetAllSuccess | GetAllFailed;
