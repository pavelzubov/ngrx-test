import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ApiModule} from './api';
import {TableComponent} from './table/table/table.component';
import {StoreModule} from '@ngrx/store';
import {programsReducer} from './store/reducers/programs.reducer';
import {InsideBlockComponent} from './inside-block/inside-block.component';
import {EffectsModule} from '@ngrx/effects';
import {ProgramsEffects} from './store/effects/programs.effects';
import {platformReducer} from './store/reducers/platform.reducer';
import {PlatformEffects} from './store/effects/platform.effects';
import { StatisticComponent } from './statistic/statistic.component';
import { StatisticViewComponent } from './statistic/statistic-view/statistic-view.component';
import {reducers} from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InsideBlockComponent,
    StatisticComponent,
    StatisticViewComponent
  ],
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProgramsEffects, PlatformEffects]),
    BrowserModule,
    AppRoutingModule,
    ApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
