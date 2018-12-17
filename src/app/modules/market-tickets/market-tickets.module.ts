import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketTicketsComponent } from './market-tickets.component';
import { EffectsModule } from '@ngrx/effects';
import { MarketTicketsEffects } from './market-tickets.effects';
import { StoreModule } from '@ngrx/store';
import { marketTicketsReducer } from './market-tickets.reducer';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [MarketTicketsComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        // StoreModule.forFeature('marketTickets', marketTicketsReducer),
        EffectsModule.forFeature([MarketTicketsEffects])
    ],
    exports: [MarketTicketsComponent]
})
export class MarketTicketsModule {}
