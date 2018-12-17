import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GetSymbolTradeSocket, GetSymbolTradeSocketRequest } from './symbol-trade.actions';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { WebsocketService } from '../../services/websocket.service';
import { getSymbolTradeSelector } from '../../store/reducers';
import { SimplexService } from '../../services/simplex.service';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-symbol-trade',
    templateUrl: './symbol-trade.component.html',
    styleUrls: ['./symbol-trade.component.sass'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [WebsocketService]
})
export class SymbolTradeComponent implements OnInit {
    SymbolTrade$: Observable<any>;
    Symbol$: Observable<any>;
    trades: any[];
    constructor(
        private store: Store<{}>,
        private websocketService: WebsocketService,
        private simplexService: SimplexService
    ) {
        this.SymbolTrade$ = store.pipe(select(getSymbolTradeSelector));
        this.Symbol$ = store.pipe(select(getSymbolSwitchSelector));
        this.Symbol$.pipe(
            switchMap(symbol => this.simplexService.getTrades(symbol)),
            switchMap(trades => {
                this.trades = trades;
                return this.SymbolTrade$;
            }),
            filter(trade => trade !== null),
            map(trade => [trade, ...this.trades])
        ).subscribe(trades => {
            this.trades = trades.slice(0, 20);
        });
    }

    ngOnInit() {
        this.Symbol$.subscribe(symbol => {
            /*this.store.dispatch(
                new GetSymbolTradeSocketRequest(this.websocketService.symbolTradeSocket(symbol))
            );*/
        });
    }
}
