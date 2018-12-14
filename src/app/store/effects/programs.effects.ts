import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ActionTypes} from '../actions/programs.actions';
import {ProgramDetails, ProgramsList, ProgramsService} from '../../api';

@Injectable()
export class ProgramsEffects {
  constructor(private programsService: ProgramsService, private actions$: Actions) {
  }
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.GetAll),
    mergeMap(action =>
      this.programsService.v10ProgramsGet().pipe(
        map(data => ({type: ActionTypes.GetAllSuccess, payload: data})),
        catchError(() => of({type: ActionTypes.GetAllFailed}))
      )
    )
  );

}
