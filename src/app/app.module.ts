import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ApiModule} from './api';
import {TableComponent} from './table/table/table.component';
import {StoreModule} from '@ngrx/store';
import {programsReducer} from './store/reducers/programs.reducer';
import {InsideBlockComponent} from './inside-block/inside-block.component';
import {EffectsModule} from '@ngrx/effects';
import {ProgramsEffects} from './store/effects/programs.effects';
import {platformReducer} from './store/reducers/platform.reducer';
import {PlatformEffects} from './store/effects/platform.effects';
import {StatisticComponent} from './statistic/statistic.component';
import {StatisticViewComponent} from './statistic/statistic-view/statistic-view.component';
import {reducers} from './store/reducers';
import {WebsocketModule} from './websocket';
import {WebsocketService} from './services/websocket.service';
import {TrackerArrComponent} from './tracker-arr/tracker-arr.component';
import {SocketEffects} from './store/effects/socket.effects';
import { SocketsComponent } from './sockets/sockets.component';
import {MarketTicketsComponent} from './market-tickets/market-tickets.component';
import { ListComponent } from './list/list.component';
import {SymbolTradeComponent} from './symbol-trade/symbol-trade.component';
import {SymbolTicketComponent} from './symbol-ticket/symbol-ticket.component';
import {SymbolMiniTickerComponent} from './symbol-mini-ticker/symbol-mini-ticker.component';

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
        SymbolTradeComponent,
        SymbolTicketComponent,
        SymbolMiniTickerComponent
    ],
    imports: [
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([ProgramsEffects, PlatformEffects, SocketEffects]),
        BrowserModule,
        AppRoutingModule,
        ApiModule,
        WebsocketModule.config({
            url: 'wss://stream.binance.com:9443/ws/!miniTicker@arr'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
