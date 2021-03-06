export * from './auth.service';
import { AuthService } from './auth.service';
export * from './brokers.service';
import { BrokersService } from './brokers.service';
export * from './file.service';
import { FileService } from './file.service';
export * from './funds.service';
import { FundsService } from './funds.service';
export * from './investor.service';
import { InvestorService } from './investor.service';
export * from './kyc.service';
import { KycService } from './kyc.service';
export * from './manager.service';
import { ManagerService } from './manager.service';
export * from './notifications.service';
import { NotificationsService } from './notifications.service';
export * from './platform.service';
import { PlatformService } from './platform.service';
export * from './profile.service';
import { ProfileService } from './profile.service';
export * from './programs.service';
import { ProgramsService } from './programs.service';
export * from './rate.service';
import { RateService } from './rate.service';
export * from './search.service';
import { SearchService } from './search.service';
export * from './wallet.service';
import { WalletService } from './wallet.service';
export const APIS = [AuthService, BrokersService, FileService, FundsService, InvestorService, KycService, ManagerService, NotificationsService, PlatformService, ProfileService, ProgramsService, RateService, SearchService, WalletService];
