import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import {ProgramDetails, ProgramsList, ProgramsService} from '../api';

import * as programActions from './actions/programs';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private programsService: ProgramsService,
  ) {}

  @Effect()
  loadMovies$ = this.actions$.ofType(programActions.GET_ALL).pipe(
    switchMap(() => {
      return this.programsService.v10ProgramsGet()
        .pipe(
          map(movies => new programActions.GetAll(movies))
        );
    })
  );

}
