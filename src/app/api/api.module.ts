import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AuthService } from './api/auth.service';
import { BrokersService } from './api/brokers.service';
import { FileService } from './api/file.service';
import { FundsService } from './api/funds.service';
import { InvestorService } from './api/investor.service';
import { KycService } from './api/kyc.service';
import { ManagerService } from './api/manager.service';
import { NotificationsService } from './api/notifications.service';
import { PlatformService } from './api/platform.service';
import { ProfileService } from './api/profile.service';
import { ProgramsService } from './api/programs.service';
import { RateService } from './api/rate.service';
import { SearchService } from './api/search.service';
import { WalletService } from './api/wallet.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AuthService,
    BrokersService,
    FileService,
    FundsService,
    InvestorService,
    KycService,
    ManagerService,
    NotificationsService,
    PlatformService,
    ProfileService,
    ProgramsService,
    RateService,
    SearchService,
    WalletService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
