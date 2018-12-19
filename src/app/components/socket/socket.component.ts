import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-socket',
    templateUrl: './socket.component.html',
    styleUrls: ['./socket.component.sass']
})
export class SocketComponent implements OnInit, OnChanges {
    @Input() data: any;
    constructor() {}

    ngOnInit() {}
    ngOnChanges() {}
}
