import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from './api';
import { TableComponent } from './components/table/table/table.component';
import { StoreModule } from '@ngrx/store';
import { programsReducer } from './store/reducers/programs.reducer';
import { InsideBlockComponent } from './components/inside-block/inside-block.component';
import { EffectsModule } from '@ngrx/effects';
import { ProgramsEffects } from './store/effects/programs.effects';
import { platformReducer } from './store/reducers/platform.reducer';
import { PlatformEffects } from './store/effects/platform.effects';
import { StatisticComponent } from './modules/statistic/statistic.component';
import { StatisticViewComponent } from './modules/statistic/statistic-view/statistic-view.component';
import { reducers } from './store/reducers';
import { TrackerArrComponent } from './modules/tracker-arr/tracker-arr.component';
import { SocketEffects } from './store/effects/socket.effects';
import { SocketsComponent } from './components/sockets/sockets.component';
import { MarketTicketsComponent } from './modules/market-tickets/market-tickets.component';
import { ListComponent } from './components/list/list.component';
import { SymbolTradeComponent } from './modules/symbol-trade/symbol-trade.component';
import { SymbolTicketComponent } from './modules/symbol-ticket/symbol-ticket.component';
import { SymbolMiniTickerComponent } from './modules/symbol-mini-ticker/symbol-mini-ticker.component';
import { SymbolComponent } from './components/symbol/symbol.component';
import { SocketComponent } from './components/socket/socket.component';
import { SymbolDepthModule } from './modules/symbol-depth/symbol-depth.module';
import { SymbolDepthEffects } from './modules/symbol-depth/symbol-depth.effects';
import { SymbolDepthComponent } from './modules/symbol-depth/symbol-depth.component';
import { SymbolSwitchComponent } from './modules/symbol-switch/symbol-switch.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { SymbolTradeModule } from './modules/symbol-trade/symbol-trade.module';
import { SymbolTicketModule } from './modules/symbol-ticket/symbol-ticket.module';
import { SymbolModule } from './components/symbol/symbol.module';
import { SocketModule } from './components/socket/socket.module';
import { WebsocketService } from './services/websocket.service';

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        InsideBlockComponent,
        StatisticComponent,
        StatisticViewComponent,
        TrackerArrComponent,
        SocketsComponent,
        MarketTicketsComponent,
        ListComponent,
        // SymbolTicketComponent,
        // SymbolMiniTickerComponent,
        // SymbolComponent,
        // SocketComponent,
        SymbolSwitchComponent,
        SwitcherComponent
    ],
    imports: [
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        BrowserModule,
        AppRoutingModule,
        ApiModule,
        SymbolTradeModule,
        SymbolTicketModule,
        SymbolModule,
        SocketModule
        // SymbolDepthModule
    ],
    // providers: [WebsocketService],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule {}
