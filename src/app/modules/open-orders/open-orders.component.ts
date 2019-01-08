import { Component, OnChanges, OnInit } from '@angular/core';
import { Column, COLUMN_TYPE } from '../../components/table/column';
import { select, Store } from '@ngrx/store';
import { getSymbolTradeSelector } from '../../store/reducers';
import { Observable } from 'rxjs';
import {
    getAllOrdersDataSelector,
    getOpenOrdersDataSelector,
    getOpenOrdersStatusSelector
} from '../../store/reducers/account.reducer';
import { filter, pairwise } from 'rxjs/operators';
import { DATA_STATUSES } from '../../constants';
import { DataService } from '../../services/data.service';

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
    Status$: Observable<any>;
    DATA_STATUSES = DATA_STATUSES;
    constructor(private dataService: DataService) {
        this.Status$ = dataService.getOpenOrdersStatus();
        dataService
            .getOpenOrdersData()
            .subscribe(line =>
                Array.isArray(line)
                    ? (this.Orders = this.Orders
                          ? [...this.Orders, ...line].reverse()
                          : [...line])
                    : line
            );
        dataService.getAllOrders().subscribe(line => {
            if (!this.Orders || line.length > 1) return;
            const filledOrder = this.Orders.findIndex(
                item => line[0].c === item.clientOrderId || line[0].c === item.c
            );
            const spliceOrders = [...this.Orders];
            if (~filledOrder) {
                spliceOrders.splice(filledOrder, 1);
                this.Orders = spliceOrders;
            }
        });
    }

    ngOnInit() {}
    ngOnChanges() {}
}
