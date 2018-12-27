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
import { distinct, filter, map } from 'rxjs/operators';
import { FormattingService } from '../../services/formatting.service';
import { getAccountBalancesSelector } from '../../store/reducers/account.reducer';

@Component({
    selector: 'app-sell-form',
    templateUrl: './sell-form.component.html',
    styleUrls: ['./sell-form.component.sass']
})
export class SellFormComponent implements OnInit {
    private Symbol$: string; // Observable<any>;
    private Status$: Observable<any>;
    private Balance: string;
    private BalanceSymbol: string;
    private TitleSymbol: string;
    private lastPrice$: Observable<number>;

    constructor(private store: Store<{}>, private formattingService: FormattingService) {
        this.Status$ = store.pipe(select(getBuyTradeSelector));
        store.pipe(select(getSymbolSwitchSelector)).subscribe((symbols: string) => {
            const symbolsArr = formattingService.splitSymbols(symbols.toUpperCase());
            this.Symbol$ = symbols;
            this.BalanceSymbol = symbolsArr[0];
            this.TitleSymbol = symbolsArr[0];
            store
                .pipe(
                    select(getAccountBalancesSelector),
                    filter(item => item !== null),
                    map(item => item.find(balance => balance.asset === symbolsArr[0])),
                    map(item => item.free),
                    distinct()
                )
                .subscribe(balance => (this.Balance = balance));
            this.lastPrice$ = store.pipe(
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
