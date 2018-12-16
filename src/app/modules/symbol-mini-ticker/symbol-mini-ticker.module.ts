import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketComponent } from '../../components/socket/socket.component';
import { SymbolComponent } from '../../components/symbol/symbol.component';
import { WebsocketService } from '../../services/websocket.service';
import { SymbolMiniTickerComponent } from './symbol-mini-ticker.component';
import { SymbolModule } from '../../components/symbol/symbol.module';
import { SocketModule } from '../../components/socket/socket.module';
import { Actions, EffectsModule } from '@ngrx/effects';
import { SymbolTradeEffects } from '../symbol-trade/symbol-trade.effects';
import { SymbolMiniTickerEffects } from './symbol-mini-ticker.effects';
import { StoreModule } from '@ngrx/store';
import { symbolMiniTickerReducer } from './symbol-mini-ticker.reducer';
import { WebSocketModule } from '../../services/websocket.module';

@NgModule({
    declarations: [SymbolMiniTickerComponent],
    imports: [
        CommonModule,
        SymbolModule,
        SocketModule,
        StoreModule.forFeature('symbolMiniTicker', symbolMiniTickerReducer),
        EffectsModule.forFeature([SymbolMiniTickerEffects])
        // WebSocketModule
    ],
    exports: [SymbolMiniTickerComponent],
    providers: [WebsocketService]
})
export class SymbolMiniTickerModule {}
