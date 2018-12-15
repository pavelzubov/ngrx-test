import {ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Column} from '../table/column';
import {PlatformStatistic} from '../api';
import {getPlatformStatistic} from '../store/reducers';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticComponent implements OnInit {
  statistic: Observable<PlatformStatistic>;
  columns: Column[] = [
    {name: 'currency', label: 'currency'},
    {name: 'level', label: 'level'},
    {name: 'periodDuration', label: 'periodDuration'},
    {name: 'periodStarts', label: 'periodStarts'},
    {name: 'periodEnds', label: 'periodEnds'},
    {name: 'availableInvestment', label: 'availableInvestment'}
  ];

  constructor(private store: Store<{ platform: any }>) {
    this.statistic = store.pipe(select(getPlatformStatistic));
  }

  ngOnInit() {
  }

}
