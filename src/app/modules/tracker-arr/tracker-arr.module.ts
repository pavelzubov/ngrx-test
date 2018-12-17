import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerArrComponent } from './tracker-arr.component';
import { EffectsModule } from '@ngrx/effects';
import { TrackerArrEffects } from './tracker-arr.effects';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [TrackerArrComponent],
    imports: [CommonModule, ComponentsModule, EffectsModule.forFeature([TrackerArrEffects])],
    exports: [TrackerArrComponent]
})
export class TrackerArrModule {}
