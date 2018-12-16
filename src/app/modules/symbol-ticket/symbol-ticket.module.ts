import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketComponent } from '../../components/socket/socket.component';
import { SymbolComponent } from '../../components/symbol/symbol.component';
import { WebsocketService } from '../../services/websocket.service';
import { SymbolTicketComponent } from './symbol-ticket.component';
import { SymbolModule } from '../../components/symbol/symbol.module';
import { SocketModule } from '../../components/socket/socket.module';
import { Actions, EffectsModule } from '@ngrx/effects';
import { SymbolTradeEffects } from '../symbol-trade/symbol-trade.effects';
import { SymbolTicketEffects } from './symbol-ticket.effects';
import { StoreModule } from '@ngrx/store';
import { symbolTicketReducer } from './symbol-ticket.reducer';
import { WebSocketModule } from '../../services/websocket.module';

@NgModule({
    declarations: [SymbolTicketComponent],
    imports: [
        CommonModule,
        SymbolModule,
        SocketModule,
        StoreModule.forFeature('symbolTicket', symbolTicketReducer),
        EffectsModule.forFeature([SymbolTicketEffects])
        // WebSocketModule
    ],
    exports: [SymbolTicketComponent],
    providers: [WebsocketService]
})
export class SymbolTicketModule {}
