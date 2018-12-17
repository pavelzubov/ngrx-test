import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ActionTypes, EffectAction } from './market-tickets.actions';

@Injectable()
export class MarketTicketsEffects {
    constructor(private actions$: Actions) {}

    @Effect()
    MarketTickets$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetMarketTicketsSocketRequest),
        mergeMap((action: EffectAction) =>
            action.payload.pipe(
                map(data => ({
                    type: ActionTypes.GetMarketTicketsSocketSuccess,
                    payload: data
                }))
            )
        )
    );
}
