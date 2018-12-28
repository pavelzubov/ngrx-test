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
        ofType(AccountActionTypes.GetAccountRequest),
        mergeMap((action: EffectAction) =>
            this.streamService.getStream(USER_DATA).pipe(
                map(data => ({
                    type: AccountActionTypes.GetAccountSuccess,
                    payload: data
                })),
                catchError(error =>
                    of({ type: AccountActionTypes.GetAccountFail, payload: error })
                )
            )
        )
    );
}
