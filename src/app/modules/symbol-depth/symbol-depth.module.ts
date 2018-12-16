import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from '../../services/websocket.service';
import { SymbolDepthComponent } from './symbol-depth.component';
import { SymbolModule } from '../../components/symbol/symbol.module';
import { SocketModule } from '../../components/socket/socket.module';
import { EffectsModule } from '@ngrx/effects';
import { SymbolDepthEffects } from './symbol-depth.effects';
import { StoreModule } from '@ngrx/store';
import { symbolDepthReducer } from './symbol-depth.reducer';

@NgModule({
    declarations: [SymbolDepthComponent],
    imports: [
        CommonModule,
        SymbolModule,
        SocketModule,
        StoreModule.forFeature('symbolDepth', symbolDepthReducer),
        EffectsModule.forFeature([SymbolDepthEffects])
    ],
    exports: [SymbolDepthComponent],
    providers: [WebsocketService]
})
export class SymbolDepthModule {}
