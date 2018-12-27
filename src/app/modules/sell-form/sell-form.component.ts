import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { Observable } from 'rxjs';
import {
    getBuyTradeSelector,
    getSellTradeSelector,
    getSymbolTradeSelector
} from '../../store/reducers';
import { SellRequest } from '../../store/actions/trade.actions';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-sell-form',
    templateUrl: './sell-form.component.html',
    styleUrls: ['./sell-form.component.sass']
})
export class SellFormComponent implements OnInit {
    private Symbol$: Observable<any>;
    private Status$: Observable<any>;
    private lastPrice: Observable<number>;

    constructor(private store: Store<{}>) {
        this.Symbol$ = store.pipe(select(getSymbolSwitchSelector));
        this.Status$ = store.pipe(select(getSellTradeSelector));
        this.Symbol$.subscribe(sumbol => {
            this.lastPrice = store.pipe(
                select(getSymbolTradeSelector),
                filter(trade => trade !== null),
                map(trade => <number>trade.p)
            );
        });
    }

    ngOnInit() {}

    private submit(e) {
        this.store.dispatch(new SellRequest(e));
    }
}
