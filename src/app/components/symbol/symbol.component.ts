import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SymbolComponent
  implements OnInit, DoCheck, AfterViewChecked, OnChanges {
  @Input() item: any;
  update = { on: false, of: 0 };

  constructor() {}

  ngOnInit() {}

  ngDoCheck() {}

  ngOnChanges() {}

  ngAfterViewChecked() {}
}
