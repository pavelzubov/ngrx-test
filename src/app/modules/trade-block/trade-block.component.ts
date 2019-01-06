import { Component, OnInit } from '@angular/core';
import { getBuyTradeSelector, getSellTradeSelector } from '../../store/reducers';
import { BuyRequest, SellRequest } from '../../store/actions/trade.actions';
import { BUY, SELL } from '../../constants';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-trade-block',
    templateUrl: './trade-block.component.html',
    styleUrls: ['./trade-block.component.sass']
})
export class TradeBlockComponent implements OnInit {
    private GetBuyTradeSelector = getBuyTradeSelector;
    private GetSellTradeSelector = getSellTradeSelector;
    private GetBuyTrade = this.dataService.getBuyTrade();
    private GetSellTrade = this.dataService.getSellTrade();
    private buyRequest = this.dataService.setBuyRequest;
    private sellRequest = this.dataService.setSellRequest;
    /*private buyRequest = BuyRequest;
    private sellRequest = SellRequest;*/
    private SELL = SELL;
    private BUY = BUY;
    constructor(private dataService: DataService) {}

    ngOnInit() {}
}
