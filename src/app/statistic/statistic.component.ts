import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Column} from '../table/column';
import {PlatformStatistic} from '../api';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.sass']
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
    this.statistic = store.pipe(select('platform'), map(res => {
      const {statistic} = res;
      console.log(res);
      return statistic;
    }));
  }

  ngOnInit() {
  }

}
