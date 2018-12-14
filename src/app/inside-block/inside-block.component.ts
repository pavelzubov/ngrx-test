import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Column} from '../table/column';

@Component({
  selector: 'app-inside-block',
  templateUrl: './inside-block.component.html',
  styleUrls: ['./inside-block.component.sass']
})
export class InsideBlockComponent implements OnInit {
  programs: Observable<any[]>;
  columns: Column[] = [
    {name: 'currency', label: 'currency'},
    {name: 'level', label: 'level'},
    {name: 'periodDuration', label: 'periodDuration'},
    {name: 'periodStarts', label: 'periodStarts'},
    {name: 'periodEnds', label: 'periodEnds'},
    {name: 'availableInvestment', label: 'availableInvestment'}
  ];

  constructor(private store: Store<{ programs: any }>) {
    this.programs = store.pipe(select('programs'), map(res => {
      console.log(res);
      return res;
    }), map(res => res.programs));
  }

  ngOnInit() {
  }

}
