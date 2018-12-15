import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {
    GetMiniTrackerArrSocketRequest,
    GetAllMarketTicketsSocketRequest,
    GetSymbolTradeSocketRequest, GetSymbolTicketSocketRequest, GetSymbolMiniTickerSocketRequest
} from '../store/actions/socket.actions';

@Component({
    selector: 'app-sockets',
    templateUrl: './sockets.component.html',
    styleUrls: ['./sockets.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocketsComponent implements OnInit {

    constructor(private store: Store<{ socket: any[] }>) {
    }

    ngOnInit() {
    }

}
