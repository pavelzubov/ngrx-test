import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './block/block.component';
import { ListComponent } from './list/list.component';
import { SymbolComponent } from './symbol/symbol.component';
import { ChartComponent } from './chart/chart.component';
import { StatisticItemComponent } from './statistic-item/statistic-item.component';
import { BlockLoaderComponent } from './block/socket-loader/block-loader.component';
import { TableComponent } from './table/table/table.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [
        BlockComponent,
        ListComponent,
        SymbolComponent,
        ChartComponent,
        StatisticItemComponent,
        BlockLoaderComponent,
        TableComponent,
        ButtonComponent
    ],
    exports: [
        BlockComponent,
        ListComponent,
        SymbolComponent,
        ChartComponent,
        StatisticItemComponent,
        TableComponent,
        ButtonComponent
    ],
    imports: [CommonModule]
})
export class ComponentsModule {}
