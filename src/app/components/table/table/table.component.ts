import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Column } from '../column';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, OnChanges {
    @Input() public columns: Column[];
    @Input() public data: any[];

    constructor() {}

    ngOnInit() {}

    ngOnChanges() {}
}
