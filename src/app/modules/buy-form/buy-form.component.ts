import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { Observable } from 'rxjs';
import { getBuyTradeSelector, getSymbolTradeSelector } from '../../store/reducers';
import { BuyRequest } from '../../store/actions/trade.actions';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-buy-form',
    templateUrl: './buy-form.component.html',
    styleUrls: ['./buy-form.component.sass']
})
export class BuyFormComponent implements OnInit {
    private Symbol$: Observable<any>;
    private Status$: Observable<any>;
    private lastPrice: Observable<number>;

    constructor(private store: Store<{}>) {
        this.Symbol$ = store.pipe(select(getSymbolSwitchSelector));
        this.Status$ = store.pipe(select(getBuyTradeSelector));
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
        this.store.dispatch(new BuyRequest(e));
    }
}
