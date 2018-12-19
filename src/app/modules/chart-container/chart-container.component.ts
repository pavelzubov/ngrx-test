import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-chart-container',
    templateUrl: './chart-container.component.html',
    styleUrls: ['./chart-container.component.sass']
})
export class ChartContainerComponent implements OnInit {
    symbol$: Observable<any>;
    constructor(private store: Store<{}>) {
        this.symbol$ = store.pipe(
            select(getSymbolSwitchSelector),
            map(item => item + ''),
            map(item => {
                const split = item.toUpperCase().split('');
                return [...split.slice(0, 3), '/', ...split.slice(3)].join('');
            })
        );
    }

    ngOnInit() {}
}
