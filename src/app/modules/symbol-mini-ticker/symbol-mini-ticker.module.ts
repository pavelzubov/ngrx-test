import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SymbolMiniTickerComponent } from './symbol-mini-ticker.component';
import { Actions, EffectsModule } from '@ngrx/effects';
import { SymbolMiniTickerEffects } from './symbol-mini-ticker.effects';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [SymbolMiniTickerComponent],
    imports: [CommonModule, ComponentsModule, EffectsModule.forFeature([SymbolMiniTickerEffects])],
    exports: [SymbolMiniTickerComponent]
})
export class SymbolMiniTickerModule {}
