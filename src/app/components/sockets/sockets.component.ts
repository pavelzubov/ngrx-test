import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetChainSocketRequest } from '../../store/actions/socket.actions';
import { GetSymbolDepthSocketRequest } from '../../modules/symbol-depth/symbol-depth.actions';
import { Observable } from 'rxjs';
import { getSymbolSwitchSelector } from '../../modules/symbol-switch/symbol-switch.reducer';

@Component({
    selector: 'app-sockets',
    templateUrl: './sockets.component.html',
    styleUrls: ['./sockets.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocketsComponent implements OnInit {
    Symbol$: Observable<any>;
    constructor(private store: Store<{ socket: any[] }>) {
        this.Symbol$ = store.pipe(select(getSymbolSwitchSelector));
    }

    ngOnInit() {
        this.store.dispatch(
            new GetChainSocketRequest({ symbol: 'bnbbtc', levels: 5, interval: 300 })
        );
        this.Symbol$.subscribe(symbol => {});
    }
}
