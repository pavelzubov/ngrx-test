import { Component, OnChanges, OnInit } from '@angular/core';
import { Column, COLUMN_TYPE } from '../../components/table/column';
import { select, Store } from '@ngrx/store';
import { getSymbolTradeSelector } from '../../store/reducers';
import { Observable } from 'rxjs';
import { getOpenOrdersSelector } from '../../store/reducers/account.reducer';
import { filter, pairwise } from 'rxjs/operators';

@Component({
    selector: 'app-open-orders',
    templateUrl: './open-orders.component.html',
    styleUrls: ['./open-orders.component.sass']
})
export class OpenOrdersComponent implements OnInit, OnChanges {
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
    openOrdersStream$: Observable<any>;
    isPending = true;
    constructor(private store: Store<{}>) {
        this.openOrdersStream$ = store.pipe(select(getOpenOrdersSelector));
        this.Orders = [];
        this.openOrdersStream$
            .pipe
            /*filter(item => !!item && !!item[0]),
                filter(item => {
                    const lastOrderId = item[0].clientOrderId || item[0].c;
                    const newOrderId =
                        this.Orders && this.Orders.length
                            ? this.Orders[this.Orders.length - 1].clientOrderId ||
                              this.Orders[this.Orders.length - 1].c
                            : null;
                    return lastOrderId !== newOrderId;
                })*/
            ()
            .subscribe(line =>
                Array.isArray(line)
                    ? (this.Orders = this.Orders
                          ? [...this.Orders, ...line].reverse()
                          : [...line])
                    : line
            );
        this.isPending = false;
    }

    ngOnInit() {
        // console.log(this.openOrders$);
    }
    ngOnChanges() {
        console.log(this.Orders, this.Orders.length);
    }
}
