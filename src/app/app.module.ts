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
import { BlockComponent } from './components/block/block.component';
import { SymbolDepthModule } from './modules/symbol-depth/symbol-depth.module';
import { SymbolDepthEffects } from './modules/symbol-depth/symbol-depth.effects';
import { SymbolDepthComponent } from './modules/symbol-depth/symbol-depth.component';
import { SymbolSwitchComponent } from './modules/symbol-switch/symbol-switch.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { SymbolTradeModule } from './modules/symbol-trade/symbol-trade.module';
import { SymbolTicketModule } from './modules/symbol-ticket/symbol-ticket.module';
import { SymbolModule } from './components/symbol/symbol.module';
import { BlockModule } from './components/block/block.module';
import { WebsocketService } from './services/websocket.service';
import { SymbolMiniTickerModule } from './modules/symbol-mini-ticker/symbol-mini-ticker.module';
import { MarketTicketsModule } from './modules/market-tickets/market-tickets.module';
import { ListModule } from './components/list/list.module';
import { TrackerArrModule } from './modules/tracker-arr/tracker-arr.module';
import { ComponentsModule } from './components/components.module';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { SimplexService } from './services/simplex.service';
import { TickersComponent } from './modules/tickers/tickers.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartContainerComponent } from './modules/chart-container/chart-container.component';
import { LoginComponent } from './modules/login/login.component';
import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { LoginModule } from './modules/login/login.module';
import { BuyFormComponent } from './modules/buy-form/buy-form.component';
import { TradeEffects } from './store/effects/trade.effects';
import { KeyComponent } from './modules/key/key.component';
import { SellFormComponent } from './modules/sell-form/sell-form.component';
import { AccountEffects } from './store/effects/account.effects';
import { TradeModuleComponent } from './modules/trade-module/trade-module.component';
import { TradeBlockComponent } from './modules/trade-block/trade-block.component';
import { OpenOrdersComponent } from './modules/open-orders/open-orders.component';
import { AllOrdersComponent } from './modules/all-orders/all-orders.component';

@NgModule({
    declarations: [
        AppComponent,
        // TableComponent,
        InsideBlockComponent,
        StatisticComponent,
        StatisticViewComponent,
        // TrackerArrComponent,
        SocketsComponent,
        // MarketTicketsComponent,
        // ListComponent,
        // SymbolTicketComponent,
        // SymbolMiniTickerComponent,
        // SymbolComponent,
        // BlockComponent,
        SymbolSwitchComponent,
        SwitcherComponent,
        TickersComponent,
        ChartContainerComponent,
        BuyFormComponent,
        SellFormComponent,
        KeyComponent,
        TradeModuleComponent,
        TradeBlockComponent,
        AllOrdersComponent,
        OpenOrdersComponent
    ],
    imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([SocketEffects, TradeEffects, AccountEffects]),
        BrowserModule,
        AppRoutingModule,
        ApiModule,
        SymbolTradeModule,
        SymbolTicketModule,
        ComponentsModule,
        SymbolDepthModule,
        SymbolMiniTickerModule,
        MarketTicketsModule,
        TrackerArrModule,
        BrowserAnimationsModule,
        LoginModule
    ],
    providers: [WebsocketService, SimplexService, LoginService],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule {}
