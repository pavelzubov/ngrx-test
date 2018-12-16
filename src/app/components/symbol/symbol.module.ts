import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SymbolComponent } from './symbol.component';

@NgModule({
    declarations: [SymbolComponent],
    exports: [SymbolComponent],
    imports: [CommonModule]
})
export class SymbolModule {}
