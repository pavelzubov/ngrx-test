import {Component, OnChanges, OnInit} from '@angular/core';
import {Column} from './table/column';
import {ProgramDetails, ProgramsList, ProgramsService} from './api';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GetAll} from './store/actions/programs.actions';
import {map} from 'rxjs/operators';
import {GetStatisticsRequest} from './store/actions/platform.actions';
import {WebsocketService} from './services/websocket.service';
import {WS} from './websocket.events';
import {GetMiniTrackerArrSocketRequest} from './store/actions/socket.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnChanges {
    constructor(private store: Store<{ programs: any[] }>,
                public programsService: ProgramsService,
                private websocketService: WebsocketService,
                private wsService: WebsocketService) {
        // this.programs = store.pipe(select('programs'), map(res => res.programs));
    }

    private messages$: Observable<any>;
    private counter$: Observable<number>;
    private texts$: Observable<string[]>;
    programs: Observable<any[]>;
    title = 'angular-test';
    columns: Column[] = [
        {name: 'currency', label: 'currency'},
        {name: 'level', label: 'level'},
        {name: 'periodDuration', label: 'periodDuration'},
        {name: 'periodStarts', label: 'periodStarts'},
        {name: 'periodEnds', label: 'periodEnds'},
        {name: 'availableInvestment', label: 'availableInvestment'}
    ];
    data: ProgramsList;

    ngOnInit() {
        this.store.dispatch(new GetAll());
        this.store.dispatch(new GetStatisticsRequest());
        // this.store.dispatch(new GetMiniTrackerArrSocketRequest());
        const interval = setInterval(_ => {
            // this.store.dispatch(new GetStatisticsRequest());
        }, 5000);

        // this.messages$ = this.websocketService.miniTrackerArrSocket();
    }

    ngOnChanges() {
        // console.log(this.messages$ )
    }
}
