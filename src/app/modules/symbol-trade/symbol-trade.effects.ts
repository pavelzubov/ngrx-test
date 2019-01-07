import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TradeActionTypes, EffectAction } from './symbol-trade.actions';
import { SimplexService } from '../../services/simplex.service';
import { StreamService } from '../../services/stream.service';

@Injectable()
export class SymbolTradeEffects {
    constructor(private actions$: Actions, private streamService: StreamService) {}

    @Effect()
    SymbolTrade$: Observable<Action> = this.actions$.pipe(
        ofType(TradeActionTypes.GetSymbolTradeSocketRequest),
        mergeMap((action: EffectAction) =>
            this.streamService.getSymbolTrade(action.payload).pipe(
                map(data => ({
                    type: TradeActionTypes.GetSymbolTradeSocketSuccess,
                    payload: data
                }))
            )
        )
    );
}
