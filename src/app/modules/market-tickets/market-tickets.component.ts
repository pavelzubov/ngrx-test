import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GetMarketTicketsSocketRequest } from './market-tickets.actions';
import { WebsocketService } from '../../services/websocket.service';
import { getMarketTicketsSelector } from '../../store/reducers';

@Component({
    selector: 'app-market-tickets',
    templateUrl: './market-tickets.component.html',
    styleUrls: ['./market-tickets.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [WebsocketService]
})
export class MarketTicketsComponent implements OnInit {
    MarketTickets$: Observable<any>;

    constructor(private store: Store<{}>, private websocketService: WebsocketService) {
        this.MarketTickets$ = store.pipe(select(getMarketTicketsSelector));
    }

    ngOnInit() {
        this.store.dispatch(
            new GetMarketTicketsSocketRequest(this.websocketService.marketTicketsSocket())
        );
    }
}
