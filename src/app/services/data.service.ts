import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
    getAccountBalancesSelector,
    getAllOrdersDataSelector,
    getOpenOrdersDataSelector,
    getOpenOrdersStatusSelector
} from '../store/reducers/account.reducer';
import { Observable } from 'rxjs';
import {
    getBuyTradeSelector,
    getSellTradeSelector,
    getSymbolTradeSelector
} from '../store/reducers';
import { getSymbolSwitchSelector } from '../modules/symbol-switch/symbol-switch.reducer';
import { BuyRequest, SellRequest } from '../store/actions/trade.actions';
import { GetSymbolTradeSocketRequest } from '../modules/symbol-trade/symbol-trade.actions';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private store: Store<{}>) {}

    public getAllOrders = (): Observable<any> =>
        this.store.pipe(select(getAllOrdersDataSelector));

    public getOpenOrdersStatus = (): Observable<any> =>
        this.store.pipe(select(getOpenOrdersStatusSelector));

    public getOpenOrdersData = (): Observable<any> =>
        this.store.pipe(select(getOpenOrdersDataSelector));

    public getBuyTrade = (): Observable<any> =>
        this.store.pipe(select(getBuyTradeSelector));

    public getSellTrade = (): Observable<any> =>
        this.store.pipe(select(getSellTradeSelector));

    public getSymbolSwitch = (): Observable<any> =>
        this.store.pipe(select(getSymbolSwitchSelector));

    public getSymbolTrade = (): Observable<any> =>
        this.store.pipe(select(getSymbolTradeSelector));

    public getAccountBalances = (): Observable<any> =>
        this.store.pipe(select(getAccountBalancesSelector));

    public setBuyRequest = (e: any): void => this.store.dispatch(new BuyRequest(e));

    public setSellRequest = (e: any): void => this.store.dispatch(new SellRequest(e));

    public setSymbolTradeRequest = (symbol: string): void =>
        this.store.dispatch(new GetSymbolTradeSocketRequest(symbol));
}
