import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from './websocket.service';

@NgModule({
    declarations: [],
    imports: [CommonModule]
})
export class WebSocketModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WebSocketModule,
            providers: [WebsocketService]
        };
    }
}
