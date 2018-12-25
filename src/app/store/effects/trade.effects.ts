import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, delay, map, mergeMap } from 'rxjs/operators';
import { EffectAction, TradeActionTypes } from '../actions/trade.actions';
import { PlatformService } from '../../api';
import { SimplexService } from '../../services/simplex.service';

@Injectable()
export class TradeEffects {
    constructor(private actions$: Actions, private simplexService: SimplexService) {}
    @Effect()
    buy$: Observable<Action> = this.actions$.pipe(
        ofType(TradeActionTypes.BuyRequest),
        mergeMap((action: EffectAction) =>
            this.simplexService.postBuy(action.payload).pipe(
                map(data => ({ type: TradeActionTypes.BuySuccess, payload: data })),
                catchError(() => of({ type: TradeActionTypes.BuyFail }))
            )
        )
    );
    @Effect()
    sell$: Observable<Action> = this.actions$.pipe(
        ofType(TradeActionTypes.SellRequest),
        mergeMap((action: EffectAction) =>
            this.simplexService.postSell(action.payload).pipe(
                map(data => ({ type: TradeActionTypes.SellSuccess, payload: data })),
                catchError(() => of({ type: TradeActionTypes.SellFail }))
            )
        )
    );
}
