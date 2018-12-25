import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-key-form',
    templateUrl: './key-form.component.html',
    styleUrls: ['./key-form.component.sass']
})
export class KeyFormComponent implements OnInit {
    @Output() save: EventEmitter<string> = new EventEmitter();
    private keyForm = new FormGroup({
        key: new FormControl(null, Validators.required)
    });

    constructor() {}

    ngOnInit() {}

    public onSave() {
        this.save.emit(this.keyForm.get('key').value);
    }
}
