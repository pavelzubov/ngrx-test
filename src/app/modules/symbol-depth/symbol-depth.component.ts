import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetSymbolMiniTickerSocketRequest } from '../../store/actions/socket.actions';
import { GetSymbolDepthSocketRequest } from './symbol-depth.actions';
import { Observable } from 'rxjs';
import { getSocketSymbolMiniTicker } from '../../store/reducers';
import { getSymbolDepthSelector } from './symbol-depth.reducer';

@Component({
    selector: 'app-symbol-depth',
    templateUrl: './symbol-depth.component.html',
    styleUrls: ['./symbol-depth.component.sass']
})
export class SymbolDepthComponent implements OnInit {
    SymbolDepth$: Observable<any>;
    constructor(private store: Store<{ symbolDepth$: any }>) {
        this.SymbolDepth$ = store.pipe(select(getSymbolDepthSelector));
    }

    ngOnInit() {
        this.store.dispatch(new GetSymbolDepthSocketRequest());
    }
}
