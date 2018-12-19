import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketComponent } from './socket/socket.component';
import { ListComponent } from './list/list.component';
import { SymbolComponent } from './symbol/symbol.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
    declarations: [SocketComponent, ListComponent, SymbolComponent, ChartComponent],
    exports: [SocketComponent, ListComponent, SymbolComponent, ChartComponent],
    imports: [CommonModule]
})
export class ComponentsModule {}
