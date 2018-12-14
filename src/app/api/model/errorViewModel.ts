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
import { ErrorMessage } from './errorMessage';


export interface ErrorViewModel {
    errors?: Array<ErrorMessage>;
    code?: ErrorViewModel.CodeEnum;
}
export namespace ErrorViewModel {
    export type CodeEnum = 'InternalServerError' | 'ValidationError' | 'RequiresTwoFactor';
    export const CodeEnum = {
        InternalServerError: 'InternalServerError' as CodeEnum,
        ValidationError: 'ValidationError' as CodeEnum,
        RequiresTwoFactor: 'RequiresTwoFactor' as CodeEnum
    }
}
