import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PENDING } from '../../store/reducers/trade.reducer';
import { select, Store } from '@ngrx/store';
import { getSymbolSwitchSelector } from '../../modules/symbol-switch/symbol-switch.reducer';

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
        price: new FormControl(0.034196, [Validators.required]),
        quantity: new FormControl(null, [Validators.required]),
        total: new FormControl(null, [Validators.required, Validators.min(0.001)])
    });
    constructor() {}

    ngOnInit() {}

    public quantityChange(): void {
        const price = this.tradeForm.get('price');
        const total = this.tradeForm.get('total');
        const quantity = this.tradeForm.get('quantity');
        total.setValue(quantity.value * price.value);
    }
    public totalChange(): void {
        const price = this.tradeForm.get('price');
        const total = this.tradeForm.get('total');
        const quantity = this.tradeForm.get('quantity');
        quantity.setValue(total.value / price.value);
    }

    public onSubmit() {
        const { price, quantity } = this.tradeForm.value;
        this.trade.emit({ price, quantity, symbol: this.symbol, type: 'LIMIT' });
    }
}
