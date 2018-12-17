import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import {
    GetSymbolMiniTickerSocket,
    GetSymbolMiniTickerSocketRequest
} from './symbol-mini-ticker.actions';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { WebsocketService } from '../../services/websocket.service';
import { getSymbolMiniTickerSelector } from '../../store/reducers';

@Component({
    selector: 'app-symbol-mini-ticker',
    templateUrl: './symbol-mini-ticker.component.html',
    styleUrls: ['./symbol-mini-ticker.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [WebsocketService]
})
export class SymbolMiniTickerComponent implements OnInit {
    SymbolMiniTicker$: Observable<any>;
    Symbol$: Observable<any>;

    update = '';

    constructor(private store: Store<{ socket: any }>, private websocketService: WebsocketService) {
        this.SymbolMiniTicker$ = store.pipe(select(getSymbolMiniTickerSelector));
        this.Symbol$ = store.pipe(select(getSymbolSwitchSelector));
    }

    ngOnInit() {
        // this.service.symbolTradeSocket();
        this.Symbol$.subscribe(symbol => {
            this.store.dispatch(
                new GetSymbolMiniTickerSocketRequest(
                    this.websocketService.symbolMiniTickerSocket(symbol)
                )
            );
        });
        // this.store.dispatch(new GetSymbolMiniTickerSocketRequest());
    }
}
