import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SymbolTicketComponent } from './symbol-ticket.component';
import { EffectsModule } from '@ngrx/effects';
import { SymbolTicketEffects } from './symbol-ticket.effects';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [SymbolTicketComponent],
    imports: [CommonModule, ComponentsModule, EffectsModule.forFeature([SymbolTicketEffects])],
    exports: [SymbolTicketComponent]
})
export class SymbolTicketModule {}
