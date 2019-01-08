import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getSymbolSwitchSelector } from '../symbol-switch/symbol-switch.reducer';
import { WebsocketService } from '../../services/websocket.service';
import { getSymbolTradeSelector } from '../../store/reducers';
import { SimplexService } from '../../services/simplex.service';
import { filter, map, scan, switchMap } from 'rxjs/operators';
import { Column, COLUMN_TYPE } from '../../components/table/column';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-symbol-trade',
    templateUrl: './symbol-trade.component.html',
    styleUrls: ['./symbol-trade.component.sass'],
    providers: [WebsocketService]
})
export class SymbolTradeComponent implements OnInit {
    columns: Column[] = [
        {
            name: ['time', 'T'],
            label: 'Time',
            type: COLUMN_TYPE.Data
        },
        {
            name: ['price', 'p'],
            label: 'Price'
        },
        {
            name: ['qty', 'q'],
            label: 'Quantity'
        }
    ];
    trades: any[];
    Orders: any[];
    constructor(private dataService: DataService) {
        dataService
            .getAllOrders()
            .pipe(
                filter(value => value !== null),
                scan((acc, curr, []) => [...curr, ...acc])
            )
            .subscribe(orders => (this.Orders = orders));
        dataService
            .getSymbolTrade()
            .pipe(
                filter(value => value !== null),
                // !!! Говнокод !!!
                map(arr => {
                    if (!this.Orders) return arr;
                    arr[0].mark = this.Orders.find(
                        order => order.orderId === arr[0].a || order.orderId === arr[0].b
                    );
                    return arr;
                }),
                // !!! Говнокод !!!
                scan((acc, curr, []) => [...curr, ...acc])
            )
            .subscribe(trades => (this.trades = trades.slice(0, 20)));
    }

    ngOnInit() {}
}
