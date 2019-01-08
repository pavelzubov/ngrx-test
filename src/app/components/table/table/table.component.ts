import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output
} from '@angular/core';
import { Column, COLUMN_TYPE } from '../column';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, OnChanges {
    @Input() public columns: Column[];
    @Input() public data: any[];
    @Output() public clickHandle = new EventEmitter<string>();
    readonly COLUMN_TYPE_DATA = COLUMN_TYPE.Data;

    constructor() {}

    ngOnInit() {}

    ngOnChanges() {}
    onClick(emit: boolean, value: any) {
        if (emit) this.clickHandle.emit(value);
    }
}
