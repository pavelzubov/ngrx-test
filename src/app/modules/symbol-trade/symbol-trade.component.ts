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
    changeDetection: ChangeDetectionStrategy.OnPush,
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
    constructor(private dataService: DataService) {
        dataService
            .getSymbolTrade()
            .pipe(scan((acc, curr, []) => [...curr, ...acc]))
            .subscribe(trades => (this.trades = trades ? trades.slice(0, 20) : []));
    }

    ngOnInit() {}
}
