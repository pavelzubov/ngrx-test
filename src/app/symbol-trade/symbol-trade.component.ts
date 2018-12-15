import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getPlatformStatistic, getSocketMiniTracker, getSocketAllMarketTickets, getSocketSymbolTrade} from '../store/reducers';
import {map} from 'rxjs/operators';
import {GetSymbolTradeSocketRequest} from '../store/actions/socket.actions';

@Component({
    selector: 'app-symbol-trade',
    templateUrl: './symbol-trade.component.html',
    styleUrls: ['./symbol-trade.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SymbolTradeComponent implements OnInit {
    SymbolTrade$: Observable<any>;

    constructor(private store: Store<{ socket: any }>) {
        this.SymbolTrade$ = store.pipe(select(getSocketSymbolTrade));
    }

    ngOnInit() {
        this.store.dispatch(new GetSymbolTradeSocketRequest());
    }

}
