import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './symbol-depth.actions';
import { WebsocketService } from '../../websocket';

@Injectable()
export class SymbolDepthEffects {
    constructor(
        private websocketService: WebsocketService,
        private actions$: Actions
    ) {}

    @Effect()
    MiniTrackerArr$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetSymbolDepthSocketRequest),
        mergeMap(action =>
            this.websocketService.subs().pipe(
                map(data => ({
                    type: ActionTypes.GetSymbolDepthSocketSuccess,
                    payload: data
                }))
            )
        )
    );
}
