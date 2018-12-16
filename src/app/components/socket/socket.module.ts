import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketComponent } from './socket.component';

@NgModule({
    declarations: [SocketComponent],
    exports: [SocketComponent],
    imports: [CommonModule]
})
export class SocketModule {}
