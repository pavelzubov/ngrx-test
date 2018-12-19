import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Column } from '../column';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, OnChanges {
    @Input() public columns: Column[];
    @Input() public data: any[];
    @Output() public clickHandle = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {}

    ngOnChanges() {}
    onClick(emit: boolean, value: any) {
        if (emit) this.clickHandle.emit(value);
    }
}
