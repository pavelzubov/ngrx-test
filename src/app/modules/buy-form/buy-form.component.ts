import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { Observable } from 'rxjs';
import { getBuyTradeSelector, getSymbolTradeSelector } from '../../store/reducers';
import { BuyRequest } from '../../store/actions/trade.actions';
import { distinct, distinctUntilChanged, filter, map } from 'rxjs/operators';
import {
    AccountBalance,
    AccountInformation,
    getAccountBalancesSelector,
    getAccountInformationDataSelector
} from '../../store/reducers/account.reducer';
import { FormattingService } from '../../services/formatting.service';
import { GetAccountInformationRequest } from '../../store/actions/account.actions';

@Component({
    // changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-buy-form',
    templateUrl: './buy-form.component.html',
    styleUrls: ['./buy-form.component.sass']
})
export class BuyFormComponent implements OnInit {
    private Symbol$: string; // Observable<any>;
    private Status$: Observable<any>;
    private Balance: string;
    private BalanceSymbol: string;
    private TitleSymbol: string;
    private lastPrice$: Observable<number>;

    constructor(private store: Store<{}>, private formattingService: FormattingService) {
        // this.Symbol$ = store.pipe(select(getSymbolSwitchSelector));
        this.Status$ = store.pipe(select(getBuyTradeSelector));
        store.pipe(select(getSymbolSwitchSelector)).subscribe((symbols: string) => {
            const symbolsArr = formattingService.splitSymbols(symbols.toUpperCase());
            this.Symbol$ = symbols;
            this.BalanceSymbol = symbolsArr[1];
            this.TitleSymbol = symbolsArr[0];
            store
                .pipe(
                    select(getAccountBalancesSelector),
                    filter(item => item !== null),
                    map(item => item.find(balance => balance.asset === symbolsArr[1])),
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
        this.store.dispatch(new BuyRequest(e));
    }
}
