import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.sass']
})
export class BlockComponent implements OnInit, OnChanges {
    @Input() data: any;
    @Input() statuses: BlockStatuses;
    @Input() status: { status: string };
    constructor() {}

    ngOnInit() {}
    ngOnChanges() {}
}
export interface BlockStatuses {
    success: string;
    pending: string;
    fail: string;
}
