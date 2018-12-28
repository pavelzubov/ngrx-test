import { AccountActionTypes } from '../actions/account.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionTypes } from '../actions/socket.actions';

export interface AccountState {
    accountInformation: AccountInformation;
    error: any;
}

export interface AccountInformation {
    makerCommission?: number;
    takerCommission?: number;
    buyerCommission?: number;
    sellerCommission?: number;
    canTrade?: boolean;
    canWithdraw?: boolean;
    canDeposit?: boolean;
    updateTime?: number;
    balances: AccountBalance[];
    b?: AccountBalance[];
}

export interface AccountBalance {
    asset: string;
    a?: string;
    free: string;
    f?: string;
    locked: string;
}

export const initialState: AccountState = {
    accountInformation: { balances: null },
    error: null
};

export function accountReducer(state = initialState, action: any): AccountState {
    switch (action.type) {
        case AccountActionTypes.GetAccountSuccess:
            return { error: undefined, ...state, accountInformation: action.payload };
        case AccountActionTypes.GetAccountFail:
            return { accountInformation: undefined, ...state, error: action.payload };
        case ActionTypes.GetUserDataStreamSuccess:
            return { ...state, accountInformation: action.payload };
        case ActionTypes.GetUserDataStreamFail:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export const getAccountState = createFeatureSelector<AccountState>('account');
export const getAccountInformationState = (state: AccountState) =>
    state.accountInformation;
export const getAccountBalanceState = (state: AccountInformation) => state.balances;
export const getAccountInformationSelector = createSelector(
    getAccountState,
    getAccountInformationState
);
export const getAccountBalancesSelector = createSelector(
    getAccountInformationSelector,
    getAccountBalanceState
);
