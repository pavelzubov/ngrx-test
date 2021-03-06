export const SELL = 'Sell';
export const BUY = 'Buy';

export enum ORDER_STATUSES {
    PARTIALLY_FILLED = 'PARTIALLY_FILLED',
    FILLED = 'FILLED',
    NEW = 'NEW',
    FAIL = 'FAIL',
    PENDING = 'PENDING',
    REJECTED = 'REJECTED'
}

export enum DATA_STATUSES {
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
    PENDING = 'PENDING'
}
