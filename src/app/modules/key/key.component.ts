import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangePrivateKeyRequest } from '../../store/actions/keys.actions';

@Component({
    selector: 'app-key',
    templateUrl: './key.component.html',
    styleUrls: ['./key.component.sass']
})
export class KeyComponent implements OnInit {
    constructor(private store: Store<{ socket: any[] }>) {}

    ngOnInit() {}
    public onSubmit(e) {
        this.store.dispatch(new ChangePrivateKeyRequest(e));
    }
}
