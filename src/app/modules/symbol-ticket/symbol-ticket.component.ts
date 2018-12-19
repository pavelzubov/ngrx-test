import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GetSymbolTicketSocketRequest } from './symbol-ticket.actions';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { WebsocketService } from '../../services/websocket.service';
import { getSymbolTicketSelector } from '../../store/reducers';
import { GetSymbolMiniTickerSocketRequest } from '../symbol-mini-ticker/symbol-mini-ticker.actions';
import { SimplexService } from '../../services/simplex.service';

@Component({
    selector: 'app-symbol-ticket',
    templateUrl: './symbol-ticket.component.html',
    styleUrls: ['./symbol-ticket.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [WebsocketService]
})
export class SymbolTicketComponent implements OnInit {
    SymbolTicket$: Observable<any>;

    update = '';

    constructor(private store: Store<{ socket: any }>) {
        this.SymbolTicket$ = store.pipe(select(getSymbolTicketSelector));
    }

    ngOnInit() {}
}
