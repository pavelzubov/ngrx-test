import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SymbolTradeComponent } from './symbol-trade.component';
import { SocketComponent } from '../../components/socket/socket.component';
import { SymbolComponent } from '../../components/symbol/symbol.component';
import { WebsocketService } from '../../services/websocket.service';
import { SymbolTicketModule } from '../symbol-ticket/symbol-ticket.module';
import { SymbolModule } from '../../components/symbol/symbol.module';
import { SocketModule } from '../../components/socket/socket.module';
import { Actions, EffectsModule } from '@ngrx/effects';
import { ProgramsEffects } from '../../store/effects/programs.effects';
import { PlatformEffects } from '../../store/effects/platform.effects';
import { SocketEffects } from '../../store/effects/socket.effects';
import { SymbolTradeEffects } from './symbol-trade.effects';
import { StoreModule } from '@ngrx/store';
import { symbolTicketReducer } from '../symbol-ticket/symbol-ticket.reducer';
import { SymbolTicketEffects } from '../symbol-ticket/symbol-ticket.effects';
import { symbolTradeReducer } from './symbol-trade.reducer';
import { WebSocketModule } from '../../services/websocket.module';

@NgModule({
    declarations: [SymbolTradeComponent],
    imports: [
        CommonModule,
        SymbolModule,
        SocketModule,
        StoreModule.forFeature('symbolTrade', symbolTradeReducer),
        EffectsModule.forFeature([SymbolTradeEffects])
        // WebSocketModule.forRoot()
    ],
    exports: [SymbolTradeComponent],
    providers: [WebsocketService]
})
export class SymbolTradeModule {}
