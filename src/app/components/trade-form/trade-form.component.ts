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
        price: new FormControl(1000, [Validators.required]),
        quantity: new FormControl(null, [Validators.required]),
        total: new FormControl(null, [Validators.required, Validators.min(0.001)])
    });
    constructor() {}

    ngOnInit() {
        this.tradeForm.get('quantity').valueChanges.subscribe(val => {
            const price = this.tradeForm.get('price');
            const total = this.tradeForm.get('total');
            console.log(val, price.value);
            // if (price.value) total.setValue(val * price.value);
        });
        this.tradeForm.get('total').valueChanges.subscribe(val => {
            const price = this.tradeForm.get('price');
            const quantity = this.tradeForm.get('quantity');
            if (price.value) quantity.setValue(val / price.value);
        });
    }
    public onSubmit() {
        this.trade.emit(this.tradeForm.value);
    }
}
