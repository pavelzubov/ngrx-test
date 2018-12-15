import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ActionTypes} from '../actions/socket.actions';
import {WebsocketService} from '../../services/websocket.service';

@Injectable()
export class SocketEffects {
    constructor(private websocketService: WebsocketService, private actions$: Actions) {
    }

    @Effect()
    MiniTrackerArr$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetMiniTrackerArrSocketRequest),
        mergeMap(action =>
            this.websocketService.miniTrackerArrSocket().pipe(
                map(data => ({type: ActionTypes.GetMiniTrackerArrSocketSuccess, payload: data}))
            )
        ),
    );

    @Effect()
    MarketTickets$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetAllMarketTicketsSocketRequest),
        mergeMap(action =>
            this.websocketService.allMarketTicketsSocket().pipe(
                map(data => ({type: ActionTypes.GetAllMarketTicketsSocketSuccess, payload: data}))
            )
        ),
    );

    @Effect()
    SymbolTicket$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetSymbolTicketSocketRequest),
        mergeMap(action =>
            this.websocketService.symbolTicketSocket().pipe(
                map(data => ({type: ActionTypes.GetSymbolTicketSocketSuccess, payload: data}))
            )
        ),
    );

    @Effect()
    SymbolTrade$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetSymbolTradeSocketRequest),
        mergeMap(action =>
            this.websocketService.symbolTradeSocket().pipe(
                map(data => ({type: ActionTypes.GetSymbolTradeSocketSuccess, payload: data}))
            )
        ),
    );

    @Effect()
    SymbolMiniTicker$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetSymbolMiniTickerSocketRequest),
        mergeMap(action =>
            this.websocketService.symbolMiniTickerSocket().pipe(
                map(data => ({type: ActionTypes.GetSymbolMiniTickerSocketSuccess, payload: data}))
            )
        ),
    );

}
