import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

declare const TradingView: any;

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit, AfterViewInit {
    @Input() symbolPair;
    pairs = [{ symbol: 'BTCUSD', text: 'BTC/USD' }, { symbol: 'ETHUSD', text: 'ETH/USD' }];

    selectPair() {
        console.log(this.symbolPair);
        for (const pair of this.pairs)
            if (pair.symbol === this.symbolPair.toUpperCase()) return pair.text;
    }
    constructor() {}

    ngOnInit() {}
    ngAfterViewInit() {
        console.log(1);
        const tradingView = new TradingView.widget({
            container_id: 'technical-analysis',
            // autosize: true,
            width: 500,
            height: 300,
            symbol: this.symbolPair,
            interval: '120',
            timezone: 'exchange',
            theme: 'White',
            style: '0',
            toolbar_bg: '#fff',
            withdateranges: true,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            save_image: false,
            hideideas: true,
            studies: ['MASimple@tv-basicstudies'],
            show_popup_button: true,
            popup_width: '1000',
            popup_height: '650'
        });
    }
}
