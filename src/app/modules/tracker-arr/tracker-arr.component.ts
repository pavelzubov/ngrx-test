import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GetTrackerArrSocketRequest } from './tracker-arr.actions';
import { WebsocketService } from '../../services/websocket.service';
import { getTrackerArrSelector } from '../../store/reducers';
import { Column, COLUMN_TYPE } from '../../components/table/column';

@Component({
    selector: 'app-tracker-arr',
    templateUrl: './tracker-arr.component.html',
    styleUrls: ['./tracker-arr.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [WebsocketService]
})
export class TrackerArrComponent implements OnInit {
    TrackerArr$: Observable<any>;

    constructor(private store: Store<{}>) {
        this.TrackerArr$ = store.pipe(select(getTrackerArrSelector));
    }

    ngOnInit() {
        /*this.store.dispatch(
            new GetTrackerArrSocketRequest(this.websocketService.trackerArrSocket())
        );*/
    }
}
