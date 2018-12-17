import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GetSymbolDepthSocketRequest } from './symbol-depth.actions';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { WebsocketService } from '../../services/websocket.service';
import { getSymbolDepthSelector } from '../../store/reducers';

@Component({
    selector: 'app-symbol-depth',
    templateUrl: './symbol-depth.component.html',
    styleUrls: ['./symbol-depth.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [WebsocketService]
})
export class SymbolDepthComponent implements OnInit {
    SymbolDepth$: Observable<any>;
    Symbol$: Observable<any>;

    update = '';

    constructor(private store: Store<{ socket: any }>, private websocketService: WebsocketService) {
        this.SymbolDepth$ = store.pipe(select(getSymbolDepthSelector));
        this.Symbol$ = store.pipe(select(getSymbolSwitchSelector));
    }

    ngOnInit() {
        this.Symbol$.subscribe(symbol => {
            /*this.store.dispatch(
                new GetSymbolDepthSocketRequest(this.websocketService.symbolDepthSocket(symbol))
            );*/
        });
    }
}
