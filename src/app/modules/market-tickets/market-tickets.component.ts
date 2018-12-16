import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getPlatformStatistic, getSocketMiniTracker, getSocketAllMarketTickets} from '../../store/reducers';
import {map} from 'rxjs/operators';
import {GetAllMarketTicketsSocketRequest} from '../../store/actions/socket.actions';

@Component({
    selector: 'app-market-tickets',
    templateUrl: './market-tickets.component.html',
    styleUrls: ['./market-tickets.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketTicketsComponent implements OnInit {
    SymbolTicket$: Observable<any>;

    constructor(private store: Store<{ socket: any }>) {
        this.SymbolTicket$ = store.pipe(select(getSocketAllMarketTickets));
    }

    ngOnInit() {
        this.store.dispatch(new GetAllMarketTicketsSocketRequest());
    }

}
