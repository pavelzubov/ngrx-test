import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GetMarketTicketsSocketRequest } from './market-tickets.actions';
import { WebsocketService } from '../../services/websocket.service';
import { getMarketTicketsSelector } from '../../store/reducers';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';

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
