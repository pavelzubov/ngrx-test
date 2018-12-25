import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PENDING } from '../../store/reducers/trade.reducer';

@Component({
    selector: 'app-trade-form',
    templateUrl: './trade-form.component.html',
    styleUrls: ['./trade-form.component.sass']
})
export class TradeFormComponent implements OnInit {
    @Input() public action: string;
    @Input() public symbol: string;
    @Input() public price: number;
    @Input() public status: any;
    @Output() trade = new EventEmitter<any>();
    private PENDING = PENDING;
    private tradeForm = new FormGroup({
        price: new FormControl(null),
        amount: new FormControl(null),
        total: new FormControl(null)
    });
    constructor() {}

    ngOnInit() {
        // console.log(this.status);
    }
    public onSubmit() {
        this.trade.emit(this.tradeForm.value);
    }
}
