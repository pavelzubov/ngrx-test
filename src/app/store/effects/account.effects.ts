import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { EffectAction, AccountActionTypes } from '../actions/account.actions';
import { SimplexService } from '../../services/simplex.service';
import { StreamService } from '../../services/stream.service';

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
                filter(item => item !== null),
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

    @Effect()
    getAllOrders$: Observable<Action> = this.actions$.pipe(
        ofType(AccountActionTypes.GetAllOrdersRequest),
        mergeMap((action: EffectAction) =>
            this.streamService.getAllOrders(action.payload).pipe(
                map(data => ({
                    type: AccountActionTypes.GetAllOrdersSuccess,
                    payload: data
                })),
                catchError(error =>
                    of({
                        type: AccountActionTypes.GetAllOrdersFail,
                        payload: error
                    })
                )
            )
        )
    );
}
