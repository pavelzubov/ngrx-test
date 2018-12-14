import {Component, OnInit} from '@angular/core';
import {Column} from './table/column';
import {ProgramDetails, ProgramsList, ProgramsService} from './api';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GetAll} from './store/actions/programs.actions';
import {map} from 'rxjs/operators';
import {GetStatisticsRequest} from './store/actions/platform.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<{ programs: any[] }>, public programsService: ProgramsService) {
    // this.programs = store.pipe(select('programs'), map(res => res.programs));
  }

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
    const interval = setInterval(_ => {
      this.store.dispatch(new GetStatisticsRequest());
    }, 5000);
  }
}
