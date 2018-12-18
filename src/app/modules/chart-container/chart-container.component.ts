import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-chart-container',
    templateUrl: './chart-container.component.html',
    styleUrls: ['./chart-container.component.sass']
})
export class ChartContainerComponent implements OnInit {
    symbol$: Observable<any>;
    constructor(private store: Store<{}>) {
        this.symbol$ = store.pipe(select(getSymbolSwitchSelector));
    }

    ngOnInit() {}
}
