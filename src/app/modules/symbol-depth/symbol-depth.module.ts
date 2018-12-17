import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from '../../services/websocket.service';
import { SymbolDepthComponent } from './symbol-depth.component';
import { EffectsModule } from '@ngrx/effects';
import { SymbolDepthEffects } from './symbol-depth.effects';
import { StoreModule } from '@ngrx/store';
import { symbolDepthReducer } from './symbol-depth.reducer';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [SymbolDepthComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        StoreModule.forFeature('symbolDepth', symbolDepthReducer),
        EffectsModule.forFeature([SymbolDepthEffects])
    ],
    exports: [SymbolDepthComponent]
})
export class SymbolDepthModule {}
