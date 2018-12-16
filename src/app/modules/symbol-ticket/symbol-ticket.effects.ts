import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes, EffectAction } from './symbol-ticket.actions';
import { WebsocketService } from '../../services/websocket.service';

@Injectable()
export class SymbolTicketEffects {
    constructor(private websocketService: WebsocketService, private actions$: Actions) {}

    @Effect()
    SymbolTicket$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetSymbolTicketSocketRequest),
        mergeMap((action: EffectAction) =>
            action.payload.pipe(
                map(data => ({
                    type: ActionTypes.GetSymbolTicketSocketSuccess,
                    payload: data
                }))
            )
        )
    );
}
