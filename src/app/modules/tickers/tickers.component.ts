import { Component, OnInit } from '@angular/core';
import { SimplexService } from '../../services/simplex.service';
import { ChangeSymbol } from '../symbol-switch/symbol-switch.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-tickers',
    templateUrl: './tickers.component.html',
    styleUrls: ['./tickers.component.sass']
})
export class TickersComponent implements OnInit {
    tickers: any[];
    constructor(private simplexService: SimplexService, private store: Store<{}>) {}

    ngOnInit() {
        this.simplexService.getTickers().subscribe(tickers => {
            this.tickers = tickers;
        });
    }
    changeSymbol(symbol) {
        this.store.dispatch(new ChangeSymbol(symbol.toLowerCase()));
    }
}
