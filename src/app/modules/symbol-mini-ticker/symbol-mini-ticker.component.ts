import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
    getPlatformStatistic,
    getSocketMiniTracker,
    getSocketAllMarketTickets,
    getSocketSymbolMiniTicker
} from '../../store/reducers';
import { map } from 'rxjs/operators';
import {
    GetMiniTrackerArrSocketRequest,
    GetSymbolMiniTickerSocketRequest
} from '../../store/actions/socket.actions';

@Component({
    selector: 'app-symbol-mini-ticker',
    templateUrl: './symbol-mini-ticker.component.html',
    styleUrls: ['./symbol-mini-ticker.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SymbolMiniTickerComponent implements OnInit {
    SymbolMiniTicker$: Observable<any>;

    constructor(private store: Store<{ socket: any }>) {
        this.SymbolMiniTicker$ = store.pipe(select(getSocketSymbolMiniTicker));
    }

    ngOnInit() {
        this.store.dispatch(new GetSymbolMiniTickerSocketRequest());
    }
}
