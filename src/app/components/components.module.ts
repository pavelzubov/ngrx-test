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
import { MatButtonModule, MatInputModule } from '@angular/material';
import { TradeFormComponent } from './trade-form/trade-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TradeFormComponent,
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
        TradeFormComponent,
        BlockComponent,
        ListComponent,
        SymbolComponent,
        ChartComponent,
        StatisticItemComponent,
        TableComponent,
        ButtonComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ComponentsModule {}
