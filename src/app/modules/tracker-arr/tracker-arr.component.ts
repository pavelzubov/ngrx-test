import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getPlatformStatistic, getSocketMiniTracker} from '../../store/reducers';
import {map} from 'rxjs/operators';
import {GetMiniTrackerArrSocketRequest} from '../../store/actions/socket.actions';

@Component({
    selector: 'app-tracker-arr',
    templateUrl: './tracker-arr.component.html',
    styleUrls: ['./tracker-arr.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackerArrComponent implements OnInit {
    MiniTrackerArr$: Observable<any>;

    constructor(private store: Store<{ socket: any }>) {
        this.MiniTrackerArr$ = store.pipe(select(getSocketMiniTracker));
    }

    ngOnInit() {
        this.store.dispatch(new GetMiniTrackerArrSocketRequest());
    }

}
