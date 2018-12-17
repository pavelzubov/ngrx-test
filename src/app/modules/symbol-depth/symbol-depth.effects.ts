import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ActionTypes, EffectAction } from './symbol-depth.actions';

@Injectable()
export class SymbolDepthEffects {
    constructor(private actions$: Actions) {}

    @Effect()
    SymbolDepth$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetSymbolDepthSocketRequest),
        mergeMap((action: EffectAction) =>
            action.payload.pipe(
                map(data => ({
                    type: ActionTypes.GetSymbolDepthSocketSuccess,
                    payload: data
                }))
            )
        )
    );
}
