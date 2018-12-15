import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {
    getPlatformStatistic,
    getSocketMiniTracker,
    getSocketAllMarketTickets,
    getSocketSymbolTrade,
    getSocketSymbolTicket
} from '../store/reducers';
import {map} from 'rxjs/operators';
import {GetSymbolTicketSocketRequest} from '../store/actions/socket.actions';

@Component({
    selector: 'app-symbol-ticket',
    templateUrl: './symbol-ticket.component.html',
    styleUrls: ['./symbol-ticket.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SymbolTicketComponent implements OnInit {
    SymbolTicket$: Observable<any>;

    constructor(private store: Store<{ socket: any }>) {
        this.SymbolTicket$ = store.pipe(select(getSocketSymbolTicket));
    }

    ngOnInit() {
        this.store.dispatch(new GetSymbolTicketSocketRequest());
    }

}
