import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getSymbolSwitchSelector } from './symbol-switch.reducer';
import { Observable } from 'rxjs';
import { ChangeSymbol } from './symbol-switch.actions';

@Component({
    selector: 'app-symbol-switch',
    templateUrl: './symbol-switch.component.html',
    styleUrls: ['./symbol-switch.component.sass']
})
export class SymbolSwitchComponent implements OnInit {
    symbolSwitcher$: Observable<any>;
    symbols = ['bnbbtc', 'tusdbtc'];
    constructor(private store: Store<{}>) {
        this.symbolSwitcher$ = store.pipe(select(getSymbolSwitchSelector));
    }

    ngOnInit() {}
    changeSymbol(e) {
        this.store.dispatch(new ChangeSymbol(e));
    }
}
