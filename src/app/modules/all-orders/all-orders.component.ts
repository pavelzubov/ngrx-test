import { Component, OnChanges, OnInit } from '@angular/core';
import { Column, COLUMN_TYPE } from '../../components/table/column';
import { select, Store } from '@ngrx/store';
import { getSymbolTradeSelector } from '../../store/reducers';
import { Observable } from 'rxjs';
import {
    getAllOrdersSelector,
    getOpenOrdersDataSelector
} from '../../store/reducers/account.reducer';
import { filter, map, pairwise } from 'rxjs/operators';

@Component({
    selector: 'app-all-orders',
    templateUrl: './all-orders.component.html',
    styleUrls: ['./all-orders.component.sass']
})
export class AllOrdersComponent implements OnInit, OnChanges {
    columns: Column[] = [
        {
            name: ['time', 'T'],
            label: 'Date',
            type: COLUMN_TYPE.Data
        },
        {
            name: ['symbol', 's'],
            label: 'Pair'
        },
        {
            name: ['type', 'o'],
            label: 'Type'
        },
        {
            name: ['side', 'S'],
            label: 'Side'
        },
        {
            name: ['price', 'p'],
            label: 'Price'
        },
        {
            name: ['origQty', 'q'],
            label: 'Amount?'
        },
        {
            name: ['icebergQty', 'F'],
            label: 'Filled%?'
        },
        {
            name: ['icebergQty', 'F'],
            label: 'Total?'
        },
        {
            name: ['icebergQty', 'F'],
            label: 'Trigger conditions?'
        }
    ];
    Orders: any[];
    OrdersStream$: Observable<any>;
    constructor(private store: Store<{}>) {
        store
            .pipe(select(getAllOrdersSelector))
            .subscribe(line =>
                Array.isArray(line)
                    ? (this.Orders = this.Orders ? [...line, ...this.Orders] : [...line])
                    : line
            );
    }

    ngOnInit() {}
    ngOnChanges() {}
}
