import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { WebsocketService } from '../../services/websocket.service';
import { getSymbolTradeSelector } from '../../store/reducers';
import { SimplexService } from '../../services/simplex.service';
import { filter, map, switchMap } from 'rxjs/operators';
import { Column, COLUMN_TYPE } from '../../components/table/column';

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
    columns: Column[] = [
        {
            name: ['time', 'T'],
            label: 'Time',
            type: COLUMN_TYPE.Data
        },
        {
            name: ['price', 'p'],
            label: 'Price'
        },
        {
            name: ['qty', 'q'],
            label: 'Quantity'
        }
    ];
    trades: any[];
    constructor(
        private store: Store<{}>,
        private websocketService: WebsocketService,
        private simplexService: SimplexService
    ) {
        this.SymbolTrade$ = store.pipe(select(getSymbolTradeSelector));
        this.Symbol$ = store.pipe(select(getSymbolSwitchSelector));
        this.Symbol$.subscribe(symbol =>
            this.simplexService
                .getTrades(symbol)
                .pipe(
                    switchMap(trades => {
                        this.trades = trades.reverse();
                        return store.pipe(select(getSymbolTradeSelector));
                    }),
                    filter(trade => trade !== null && trade.s.toLowerCase() === symbol),
                    map(trade => [trade, ...this.trades])
                )
                .subscribe(trades => (this.trades = trades.slice(0, 20)))
        );
    }

    ngOnInit() {}
}
