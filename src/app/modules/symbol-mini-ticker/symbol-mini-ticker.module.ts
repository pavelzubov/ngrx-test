import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from '../../services/websocket.service';
import { SymbolMiniTickerComponent } from './symbol-mini-ticker.component';
import { Actions, EffectsModule } from '@ngrx/effects';
import { SymbolMiniTickerEffects } from './symbol-mini-ticker.effects';
import { StoreModule } from '@ngrx/store';
import { symbolMiniTickerReducer } from './symbol-mini-ticker.reducer';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [SymbolMiniTickerComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        StoreModule.forFeature('symbolMiniTicker', symbolMiniTickerReducer),
        EffectsModule.forFeature([SymbolMiniTickerEffects])
    ],
    exports: [SymbolMiniTickerComponent]
})
export class SymbolMiniTickerModule {}
