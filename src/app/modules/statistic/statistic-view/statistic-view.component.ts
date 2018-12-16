import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {PlatformStatistic} from '../../../api';

@Component({
  selector: 'app-statistic-view',
  templateUrl: './statistic-view.component.html',
  styleUrls: ['./statistic-view.component.sass']
})
export class StatisticViewComponent implements OnInit {
  @Input() data: PlatformStatistic;
  constructor() { }

  ngOnInit() {
  }
}
