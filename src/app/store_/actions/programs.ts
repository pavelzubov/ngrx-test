import { Action } from '@ngrx/store';
import {ProgramsList} from '../../api';
export const GET_ALL = '[Films] Get all';
export class GetAll implements Action {
  readonly type = GET_ALL;
  constructor(public payload: ProgramsList) { }
}

export type Action = GetAll;
