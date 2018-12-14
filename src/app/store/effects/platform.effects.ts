import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ActionTypes} from '../actions/platform.actions';
import {PlatformService} from '../../api';

@Injectable()
export class PlatformEffects {
  constructor(private platformService: PlatformService, private actions$: Actions) {
  }
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.GetStatisticsRequest),
    mergeMap(action =>
      this.platformService.v10PlatformStatisticGet().pipe(
        map(data => ({type: ActionTypes.GetStatisticsSuccess, payload: data})),
        catchError(() => of({type: ActionTypes.GetStatisticsFailure}))
      )
    )
  );

}
