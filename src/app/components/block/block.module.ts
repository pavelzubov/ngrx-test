import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './block.component';

@NgModule({
    declarations: [BlockComponent],
    exports: [BlockComponent],
    imports: [CommonModule]
})
export class SocketModule {}
