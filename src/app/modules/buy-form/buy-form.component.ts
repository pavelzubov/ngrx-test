import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { Observable } from 'rxjs';
import { getBuyTradeSelector } from '../../store/reducers';
import { BuyRequest } from '../../store/actions/trade.actions';

@Component({
    selector: 'app-buy-form',
    templateUrl: './buy-form.component.html',
    styleUrls: ['./buy-form.component.sass']
})
export class BuyFormComponent implements OnInit {
    private Symbol$: Observable<any>;
    private Status$: Observable<any>;
    constructor(private store: Store) {
        this.Symbol$ = store.pipe(select(getSymbolSwitchSelector));
        this.Status$ = store.pipe(select(getBuyTradeSelector));
    }

    ngOnInit() {}
    private submit(e) {
        this.store.dispatch(new BuyRequest(e));
    }
}
