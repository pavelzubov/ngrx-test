import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EffectAction, AccountActionTypes } from '../actions/account.actions';
import { SimplexService } from '../../services/simplex.service';
import { StreamService, USER_DATA } from '../../services/stream.service';

@Injectable()
export class AccountEffects {
    constructor(
        private actions$: Actions,
        private simplexService: SimplexService,
        private streamService: StreamService
    ) {}
    @Effect()
    getAccountInformation$: Observable<Action> = this.actions$.pipe(
        ofType(AccountActionTypes.GetAccountInformationRequest),
        mergeMap((action: EffectAction) =>
            this.streamService.getUserData().pipe(
                map(data => ({
                    type: AccountActionTypes.GetAccountInformationSuccess,
                    payload: data
                })),
                catchError(error =>
                    of({
                        type: AccountActionTypes.GetAccountInformationFail,
                        payload: error
                    })
                )
            )
        )
    );

    @Effect()
    getOpenOrders$: Observable<Action> = this.actions$.pipe(
        ofType(AccountActionTypes.GetOpenOrdersRequest),
        mergeMap((action: EffectAction) =>
            this.streamService.getOpenOrders(action.payload).pipe(
                map(data => ({
                    type: AccountActionTypes.GetOpenOrdersSuccess,
                    payload: data
                })),
                catchError(error =>
                    of({
                        type: AccountActionTypes.GetOpenOrdersFail,
                        payload: error
                    })
                )
            )
        )
    );
}
