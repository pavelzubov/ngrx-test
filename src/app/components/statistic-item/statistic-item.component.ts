import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-statistic-item',
    templateUrl: './statistic-item.component.html',
    styleUrls: ['./statistic-item.component.sass']
})
export class StatisticItemComponent implements OnInit {
    @Input() label: string;
    constructor() {}

    ngOnInit() {}
}
