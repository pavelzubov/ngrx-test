import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit, OnChanges {
    @Input() list: any[];

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges() {
    }
}
