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
    Symbol$: Observable<any>;

    update = '';

    constructor(
        private store: Store<{ socket: any }>,
        private websocketService: WebsocketService,
        private simplexService: SimplexService
    ) {
        this.SymbolTicket$ = store.pipe(select(getSymbolTicketSelector));
        this.Symbol$ = store.pipe(select(getSymbolSwitchSelector));
    }

    ngOnInit() {
        this.SymbolTicket$.subscribe(res => {
            console.log(res);
            // res.subscribe(r => console.log(r));
        });
        // this.service.symbolTradeSocket();
        this.Symbol$.subscribe(symbol => {
            /*this.store.dispatch(
                new GetSymbolMiniTickerSocketRequest(
                    this.simplexService.getTickers(symbol)
                )
            );
            this.store.dispatch(
                new GetSymbolTicketSocketRequest(
                    this.websocketService.symbolTicketSocket(symbol)
                )
            );*/
        });
        // this.store.dispatch(new GetSymbolTicketSocketRequest());
    }
}
