import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketModule } from '../../websocket';
import { SymbolDepthComponent } from './symbol-depth.component';
import { SymbolComponent } from '../../components/symbol/symbol.component';
import { SocketComponent } from '../../components/socket/socket.component';

@NgModule({
    declarations: [SymbolDepthComponent, SymbolComponent, SocketComponent],
    imports: [
        CommonModule,
        WebsocketModule.config({
            url: 'wss://stream.binance.com:9443/ws/bnbbtc@depth'
        })
    ],
    exports: [SymbolDepthComponent]
})
export class SymbolDepthModule {}
