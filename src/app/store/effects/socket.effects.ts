import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ActionTypes, EffectAction } from '../actions/socket.actions';
import {
    ChainElement,
    DEPTH,
    TICKER,
    TRADE,
    WebsocketService
} from '../../services/websocket.service';
import { TradeActionTypes } from '../../modules/symbol-trade/symbol-trade.actions';
import { DepthActionTypes } from '../../modules/symbol-depth/symbol-depth.actions';
import { TrackerArrActionTypes } from '../../modules/tracker-arr/tracker-arr.actions';
import { TickerActionTypes } from '../../modules/symbol-ticket/symbol-ticket.actions';
import { MarketTicketsActionTypes } from '../../modules/market-tickets/market-tickets.actions';
import { AccountActionTypes } from '../actions/account.actions';

@Injectable()
export class SocketEffects {
    constructor(private websocketService: WebsocketService, private actions$: Actions) {}

    @Effect()
    Chain$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetChainSocketRequest),
        switchMap((action: EffectAction) =>
            this.websocketService.chainSocket(<ChainElement>{
                symbol: action.payload.symbol,
                levels: action.payload.levels,
                intervalMs: action.payload.interval
            })
        ),
        map(data => {
            const method = data.stream.split('@')[1];
            switch (method) {
                case TRADE:
                    return {
                        type: TradeActionTypes.GetSymbolTradeSocketSuccess,
                        payload: data.data
                    };
                case TICKER:
                    return {
                        type: TickerActionTypes.GetSymbolTicketSocketSuccess,
                        payload: data.data
                    };
                case DEPTH:
                default:
                    return {
                        type: DepthActionTypes.GetSymbolDepthSocketSuccess,
                        payload: data.data
                    };
            }
        })
    );

    /*@Effect()
    UserData$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetUserDataStreamRequest),
        mergeMap((action: EffectAction) =>
            this.websocketService.getUserDataStream().pipe(
                map(data => ({
                    type: ActionTypes.GetUserDataStreamSuccess,
                    payload: data
                })),
                catchError(error =>
                    of({ type: ActionTypes.GetUserDataStreamFail, payload: error })
                )
            )
        )
    );*/

    @Effect()
    MarketTickets$: Observable<Action> = this.actions$.pipe(
        ofType(MarketTicketsActionTypes.GetMarketTicketsSocketRequest),
        mergeMap((action: EffectAction) =>
            this.websocketService.marketTicketsSocket().pipe(
                map(data => ({
                    type: MarketTicketsActionTypes.GetMarketTicketsSocketSuccess,
                    payload: data
                }))
            )
        )
    );
    /*@Effect()
    MiniTrackerArr$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetMiniTrackerArrSocketRequest),
        mergeMap(action =>
            this.websocketService.miniTrackerArrSocket().pipe(
                map(data => ({
                    type: ActionTypes.GetMiniTrackerArrSocketSuccess,
                    payload: data
                }))
            )
        )
    );*/

    /* @Effect()
    MarketTickets$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetAllMarketTicketsSocketRequest),
        mergeMap(action =>
            this.websocketService.allMarketTicketsSocket().pipe(
                map(data => ({
                    type: ActionTypes.GetAllMarketTicketsSocketSuccess,
                    payload: data
                }))
            )
        )
    );*/

    /*@Effect()
    SymbolTicket$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetSymbolTicketSocketRequest),
        mergeMap((action: EffectAction) =>
            this.websocketService.symbolTicketSocket(action.payload).pipe(
                map(data => ({
                    type: ActionTypes.GetSymbolTicketSocketSuccess,
                    payload: data
                }))
            )
        )
    );*/

    /*@Effect()
    SymbolTrade$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetSymbolTradeSocketRequest),
        mergeMap((action: EffectAction) =>
            this.websocketService.symbolTradeSocket(action.payload).pipe(
                map(data => ({
                    type: ActionTypes.GetSymbolTradeSocketSuccess,
                    payload: data
                }))
            )
        )
    );*/

    /*@Effect()
    SymbolMiniTicker$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetSymbolMiniTickerSocketRequest),
        mergeMap(action =>
            this.websocketService.symbolMiniTickerSocket().pipe(
                map(data => ({
                    type: ActionTypes.GetSymbolMiniTickerSocketSuccess,
                    payload: data
                }))
            )
        )
    );*/
}
