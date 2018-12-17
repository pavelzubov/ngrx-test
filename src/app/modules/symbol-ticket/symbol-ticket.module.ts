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
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [SymbolTicketComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        StoreModule.forFeature('symbolTicket', symbolTicketReducer),
        EffectsModule.forFeature([SymbolTicketEffects])
    ],
    exports: [SymbolTicketComponent]
})
export class SymbolTicketModule {}
