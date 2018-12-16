import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes, EffectAction } from './symbol-mini-ticker.actions';
import { WebsocketService } from '../../services/websocket.service';

@Injectable()
export class SymbolMiniTickerEffects {
    constructor(private websocketService: WebsocketService, private actions$: Actions) {}

    @Effect()
    SymbolMiniTicker$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetSymbolMiniTickerSocketRequest),
        mergeMap((action: EffectAction) =>
            action.payload.pipe(
                map(data => ({
                    type: ActionTypes.GetSymbolMiniTickerSocketSuccess,
                    payload: data
                }))
            )
        )
    );
}
