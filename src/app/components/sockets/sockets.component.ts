import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetChainSocketRequest } from '../../store/actions/socket.actions';
import { GetSymbolDepthSocketRequest } from '../../modules/symbol-depth/symbol-depth.actions';
import { Observable } from 'rxjs';
import { getSymbolSwitchSelector } from '../../modules/symbol-switch/symbol-switch.reducer';
import {
    GetSymbolMiniTickerSocketRequest,
    GetSymbolMiniTickerSocketSuccess
} from '../../modules/symbol-mini-ticker/symbol-mini-ticker.actions';
import { WebsocketService } from '../../services/websocket.service';
import { SimplexService } from '../../services/simplex.service';
import {
    GetSymbolTicketSocketRequest,
    GetSymbolTicketSocketSuccess
} from '../../modules/symbol-ticket/symbol-ticket.actions';
import { getPrivateKeySelector } from '../../store/reducers';

@Component({
    selector: 'app-sockets',
    templateUrl: './sockets.component.html',
    styleUrls: ['./sockets.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocketsComponent implements OnInit {
    Symbol$: Observable<any>;
    private privateKey: string;
    constructor(
        private store: Store<{ socket: any[] }>,
        private simplexService: SimplexService
    ) {
        this.Symbol$ = store.pipe(select(getSymbolSwitchSelector));
        store
            .pipe(select(getPrivateKeySelector))
            .subscribe(key => (this.privateKey = key));
    }

    ngOnInit() {
        this.Symbol$.subscribe(symbol => {
            this.store.dispatch(new GetSymbolTicketSocketRequest(symbol));
            this.store.dispatch(new GetSymbolDepthSocketRequest(symbol));
            this.store.dispatch(
                new GetChainSocketRequest({ symbol: symbol, levels: 5, interval: 300 })
            );
        });
    }
}
