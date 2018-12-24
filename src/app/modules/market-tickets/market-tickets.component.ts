import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GetMarketTicketsSocketRequest } from './market-tickets.actions';
import { WebsocketService } from '../../services/websocket.service';
import { getMarketTicketsSelector } from '../../store/reducers';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { Column } from '../../components/table/column';

@Component({
    selector: 'app-market-tickets',
    templateUrl: './market-tickets.component.html',
    styleUrls: ['./market-tickets.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [WebsocketService]
})
export class MarketTicketsComponent implements OnInit {
    Symbol$: Observable<any>;
    MarketTickets$: Observable<any>;
    columns: Column[] = [
        {
            name: ['symbol', 's'],
            label: 'Symbol',
            clickCell: true
        },
        {
            name: ['openPrice', 'O'],
            label: 'Open price'
        },
        {
            name: ['priceChangePercent', 'C'],
            label: 'Change'
        }
    ];

    constructor(private store: Store<{}>) {
        this.Symbol$ = store.pipe(select(getSymbolSwitchSelector));
        this.MarketTickets$ = store.pipe(select(getMarketTicketsSelector));
    }

    ngOnInit() {
        this.Symbol$.subscribe(symbol => {
            this.store.dispatch(new GetMarketTicketsSocketRequest());
        });
    }
}
