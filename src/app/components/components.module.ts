import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketComponent } from './socket/socket.component';
import { ListComponent } from './list/list.component';
import { SymbolComponent } from './symbol/symbol.component';
import { ChartComponent } from './chart/chart.component';
import { StatisticItemComponent } from './statistic-item/statistic-item.component';
import { SocketLoaderComponent } from './socket/socket-loader/socket-loader.component';
import { TableComponent } from './table/table/table.component';

@NgModule({
    declarations: [
        SocketComponent,
        ListComponent,
        SymbolComponent,
        ChartComponent,
        StatisticItemComponent,
        SocketLoaderComponent,
        TableComponent
    ],
    exports: [
        SocketComponent,
        ListComponent,
        SymbolComponent,
        ChartComponent,
        StatisticItemComponent,
        TableComponent
    ],
    imports: [CommonModule]
})
export class ComponentsModule {}
