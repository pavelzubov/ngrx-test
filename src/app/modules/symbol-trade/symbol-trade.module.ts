import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SymbolTradeComponent } from './symbol-trade.component';
import { EffectsModule } from '@ngrx/effects';
import { SymbolTradeEffects } from './symbol-trade.effects';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [SymbolTradeComponent],
    imports: [CommonModule, ComponentsModule, EffectsModule.forFeature([SymbolTradeEffects])],
    exports: [SymbolTradeComponent]
})
export class SymbolTradeModule {}
