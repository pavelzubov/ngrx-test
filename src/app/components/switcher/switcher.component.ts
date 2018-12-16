import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-switcher',
    templateUrl: './switcher.component.html',
    styleUrls: ['./switcher.component.sass']
})
export class SwitcherComponent implements OnInit {
    @Input() options: string[];
    @Input() selected: string;
    @Output() changeValue = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {}

    private changeOption(e) {
        this.changeValue.emit(e.target.value);
    }
}
