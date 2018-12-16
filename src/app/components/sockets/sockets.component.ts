import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-sockets',
    templateUrl: './sockets.component.html',
    styleUrls: ['./sockets.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocketsComponent implements OnInit {
    constructor(private store: Store<{ socket: any[] }>) {}

    ngOnInit() {}
}
