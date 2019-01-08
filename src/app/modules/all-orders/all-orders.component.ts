import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { Column, COLUMN_TYPE } from '../../components/table/column';
import { select, Store } from '@ngrx/store';
import { getSymbolTradeSelector } from '../../store/reducers';
import { Observable } from 'rxjs';
import {
    getAllOrdersDataSelector,
    getOpenOrdersDataSelector
} from '../../store/reducers/account.reducer';
import { filter, map, pairwise, scan, tap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';

@Component({
    // changeDetection: ChangeDetectionStrategy.OnPush,
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
    constructor(private dataService: DataService) {
        dataService
            .getAllOrders()
            .pipe(
                filter(value => value !== null),
                scan((acc, curr, []) => [...curr, ...acc])
            )
            .subscribe(orders => (this.Orders = orders));
    }

    ngOnInit() {}
    ngOnChanges() {}
}
