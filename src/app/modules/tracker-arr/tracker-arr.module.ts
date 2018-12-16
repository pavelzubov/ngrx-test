import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from '../../services/websocket.service';
import { TrackerArrComponent } from './tracker-arr.component';
import { SocketModule } from '../../components/socket/socket.module';
import { EffectsModule } from '@ngrx/effects';
import { TrackerArrEffects } from './tracker-arr.effects';
import { StoreModule } from '@ngrx/store';
import { trackerArrReducer } from './tracker-arr.reducer';
import { ListModule } from '../../components/list/list.module';

@NgModule({
    declarations: [TrackerArrComponent],
    imports: [
        CommonModule,
        ListModule,
        SocketModule,
        StoreModule.forFeature('trackerArr', trackerArrReducer),
        EffectsModule.forFeature([TrackerArrEffects])
    ],
    exports: [TrackerArrComponent],
    providers: [WebsocketService]
})
export class TrackerArrModule {}
