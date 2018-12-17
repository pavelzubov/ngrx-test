import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SymbolDepthComponent } from './symbol-depth.component';
import { EffectsModule } from '@ngrx/effects';
import { SymbolDepthEffects } from './symbol-depth.effects';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [SymbolDepthComponent],
    imports: [CommonModule, ComponentsModule, EffectsModule.forFeature([SymbolDepthEffects])],
    exports: [SymbolDepthComponent]
})
export class SymbolDepthModule {}
