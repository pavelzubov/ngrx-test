import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.sass']
})
export class BlockComponent implements OnInit, OnChanges {
    @Input() data: any;
    constructor() {}

    ngOnInit() {}
    ngOnChanges() {}
}
