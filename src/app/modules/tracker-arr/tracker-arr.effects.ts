import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ActionTypes, EffectAction } from './tracker-arr.actions';

@Injectable()
export class TrackerArrEffects {
    constructor(private actions$: Actions) {}

    @Effect()
    TrackerArr$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetTrackerArrSocketRequest),
        mergeMap((action: EffectAction) =>
            action.payload.pipe(
                map(data => ({
                    type: ActionTypes.GetTrackerArrSocketSuccess,
                    payload: data
                }))
            )
        )
    );
}
