import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { DepthActionTypes, EffectAction } from './symbol-depth.actions';
import { SimplexService } from '../../services/simplex.service';

@Injectable()
export class SymbolDepthEffects {
    constructor(private actions$: Actions, private simplexService: SimplexService) {}

    @Effect()
    SymbolDepth$: Observable<Action> = this.actions$.pipe(
        ofType(DepthActionTypes.GetSymbolDepthSocketRequest),
        mergeMap((action: EffectAction) =>
            this.simplexService.getDepth(action.payload).pipe(
                map(data => ({
                    type: DepthActionTypes.GetSymbolDepthSocketSuccess,
                    payload: data
                }))
            )
        )
    );
}
