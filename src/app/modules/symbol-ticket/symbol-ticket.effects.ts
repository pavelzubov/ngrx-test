import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TickerActionTypes, EffectAction } from './symbol-ticket.actions';
import { SimplexService } from '../../services/simplex.service';

@Injectable()
export class SymbolTicketEffects {
    constructor(private actions$: Actions, private simplexService: SimplexService) {}

    @Effect()
    SymbolTicket$: Observable<Action> = this.actions$.pipe(
        ofType(TickerActionTypes.GetSymbolTicketSocketRequest),
        mergeMap((action: EffectAction) =>
            this.simplexService.getTickers(action.payload).pipe(
                map(data => ({
                    type: TickerActionTypes.GetSymbolTicketSocketSuccess,
                    payload: data
                }))
            )
        )
    );
}
