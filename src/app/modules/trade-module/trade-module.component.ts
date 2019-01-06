import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { FormattingService } from '../../services/formatting.service';
import { getSymbolTradeSelector } from '../../store/reducers';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { getAccountBalancesSelector } from '../../store/reducers/account.reducer';
import { distinct, filter, map, take } from 'rxjs/operators';
import { BUY, ORDER_STATUSES } from '../../constants';
import { GetAccountInformationRequest } from '../../store/actions/account.actions';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-trade-module',
    templateUrl: './trade-module.component.html',
    styleUrls: ['./trade-module.component.sass']
})
export class TradeModuleComponent implements OnInit {
    @Input() tradeRequest: any;
    @Input() tradeSelector: any;
    @Input() tradeData: Observable<any>;
    @Input() action: string;
    private Symbol$: string; // Observable<any>;
    private Status$: Observable<any>;
    private Balance: string;
    private BalanceSymbol: string;
    private TitleSymbol: string;
    private lastPrice$: Observable<number>;
    private ORDER_STATUSES = ORDER_STATUSES;

    constructor(
        private dataService: DataService,
        private store: Store<{}>,
        private formattingService: FormattingService
    ) {}

    ngOnInit() {
        this.Status$ = this.tradeData.pipe(
            filter(item => item !== null),
            map(item => item.status)
        );
        this.dataService.getSymbolSwitch().subscribe((symbols: string) => {
            const symbolsArr = this.formattingService.splitSymbols(symbols.toUpperCase());
            const tradeHalf = this.action === BUY ? 1 : 0;
            this.Symbol$ = symbols;
            this.BalanceSymbol = symbolsArr[tradeHalf];
            this.TitleSymbol = symbolsArr[0];
            this.dataService
                .getAccountBalances()
                .pipe(
                    filter(balances => balances !== null),
                    map(balances =>
                        balances.find(balance =>
                            balance.asset
                                ? balance.asset === symbolsArr[tradeHalf]
                                : balance.a === symbolsArr[tradeHalf]
                        )
                    ),
                    map(balance => (balance.free ? balance.free : balance.f)),
                    distinct()
                )
                .subscribe(balance => (this.Balance = balance));
            this.lastPrice$ = this.dataService.getSymbolTrade().pipe(
                filter(trade => trade !== null),
                filter(trade => trade.s.toUpperCase() === symbols.toUpperCase()),
                map(trade => <number>trade.p),
                take(1)
            );
        });
    }
    private submit(e) {
        this.tradeRequest(e);
    }
}
