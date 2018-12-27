import { AccountActionTypes } from '../actions/account.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AccountState {
    accountInformation: {
        makerCommission: number;
        takerCommission: number;
        buyerCommission: number;
        sellerCommission: number;
        canTrade: boolean;
        canWithdraw: boolean;
        canDeposit: boolean;
        updateTime: number;
        balances: AccountBalance[];
    };
    error: any;
}

export interface AccountBalance {
    asset: string;
    free: string;
    locked: string;
}

export const initialState: AccountState = {
    accountInformation: null,
    error: null
};

export function accountReducer(state = initialState, action: any): AccountState {
    switch (action.type) {
        case AccountActionTypes.GetAccountSuccess:
            return { ...state, accountInformation: action.payload, error: null };
        case AccountActionTypes.GetAccountFail:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export const getAccountState = createFeatureSelector<AccountState>('account');
export const getAccountInformationState = (state: AccountState) =>
    state.accountInformation;
export const getAccountInformationSelector = createSelector(
    getAccountState,
    getAccountInformationState
);
