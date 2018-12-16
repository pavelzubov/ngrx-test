import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from '../../services/websocket.service';
import { MarketTicketsComponent } from './market-tickets.component';
import { SymbolModule } from '../../components/symbol/symbol.module';
import { SocketModule } from '../../components/socket/socket.module';
import { EffectsModule } from '@ngrx/effects';
import { MarketTicketsEffects } from './market-tickets.effects';
import { StoreModule } from '@ngrx/store';
import { marketTicketsReducer } from './market-tickets.reducer';
import { ListModule } from '../../components/list/list.module';

@NgModule({
    declarations: [MarketTicketsComponent],
    imports: [
        CommonModule,
        ListModule,
        SocketModule,
        StoreModule.forFeature('marketTickets', marketTicketsReducer),
        EffectsModule.forFeature([MarketTicketsEffects])
    ],
    exports: [MarketTicketsComponent],
    providers: [WebsocketService]
})
export class MarketTicketsModule {}
