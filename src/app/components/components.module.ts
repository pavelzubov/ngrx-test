import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketComponent } from './socket/socket.component';
import { ListComponent } from './list/list.component';
import { SymbolComponent } from './symbol/symbol.component';

@NgModule({
    declarations: [SocketComponent, ListComponent, SymbolComponent],
    exports: [SocketComponent, ListComponent, SymbolComponent],
    imports: [CommonModule]
})
export class ComponentsModule {}
