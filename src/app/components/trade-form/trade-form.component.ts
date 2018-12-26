import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PENDING } from '../../store/reducers/trade.reducer';
import { select, Store } from '@ngrx/store';
import { getSymbolSwitchSelector } from '../../modules/symbol-switch/symbol-switch.reducer';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-trade-form',
    templateUrl: './trade-form.component.html',
    styleUrls: ['./trade-form.component.sass']
})
export class TradeFormComponent implements OnInit, OnChanges {
    @Input() public action: string;
    @Input() public symbol: string;
    @Input() public price: Observable<number>;
    // @Input() public lastPrice: number;
    @Input() public status: any;
    @Output() trade = new EventEmitter<any>();
    priceSub: any;
    private PENDING = PENDING;
    private tradeForm = new FormGroup({
        price: new FormControl(this.price, [Validators.required]),
        quantity: new FormControl(null, [Validators.required]),
        total: new FormControl(null, [Validators.required, Validators.min(0.001)])
    });
    constructor() {}

    ngOnInit() {}
    ngOnChanges() {
        this.priceSub = this.price.subscribe(price => {
            this.tradeForm.get('price').setValue(price);
            this.priceSub.unsubscribe();
        });
    }

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
