import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GetSymbolTradeSocket, GetSymbolTradeSocketRequest } from './symbol-trade.actions';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { WebsocketService } from '../../services/websocket.service';
import { getSymbolTradeSelector } from '../../store/reducers';

@Component({
    selector: 'app-symbol-trade',
    templateUrl: './symbol-trade.component.html',
    styleUrls: ['./symbol-trade.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [WebsocketService]
})
export class SymbolTradeComponent implements OnInit {
    SymbolTrade$: Observable<any>;
    Symbol$: Observable<any>;

    constructor(private store: Store<{}>, private websocketService: WebsocketService) {
        this.SymbolTrade$ = store.pipe(select(getSymbolTradeSelector));
        this.Symbol$ = store.pipe(select(getSymbolSwitchSelector));
    }

    ngOnInit() {
        this.Symbol$.subscribe(symbol => {
            /*this.store.dispatch(
                new GetSymbolTradeSocketRequest(this.websocketService.symbolTradeSocket(symbol))
            );*/
        });
    }
}
