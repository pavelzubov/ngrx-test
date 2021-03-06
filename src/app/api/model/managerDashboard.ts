/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AssetSelection } from './assetSelection';
import { FundProfitChart } from './fundProfitChart';
import { ManagerPortfolioEvents } from './managerPortfolioEvents';
import { ManagerProfileDetails } from './managerProfileDetails';
import { ProgramProfitChart } from './programProfitChart';
import { ProgramRequest } from './programRequest';


export interface ManagerDashboard {
    profile?: ManagerProfileDetails;
    requests?: ProgramRequest;
    events?: ManagerPortfolioEvents;
    allAssets?: Array<AssetSelection>;
    /**
     * One of the charts will be null
     */
    programChart?: ProgramProfitChart;
    fundChart?: FundProfitChart;
}
