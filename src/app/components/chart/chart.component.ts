import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

declare const TradingView: any;
declare const Datafeeds: any;

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit, OnChanges {
    @Input() symbolPair;
    tradingView: any;

    constructor() {}

    ngOnInit() {
        this.tradingView = new TradingView.widget({
            // symbol: this.symbolPair,
            symbol: 'A',
            autosize: true,
            interval: 'D',
            // timezone: 'exchange',
            container_id: 'technical-analysis',
            datafeed: new Datafeeds.UDFCompatibleDatafeed(
                'https://demo_feed.tradingview.com'
            ),
            library_path: 'assets/charting_library/',
            locale: 'en',
            allow_symbol_change: true,
            disabled_features: ['use_localstorage_for_settings'],
            enabled_features: ['study_templates'],
            charts_storage_url: 'http://saveload.tradingview.com',
            charts_storage_api_version: '1.1',
            client_id: 'tradingview.com',
            user_id: 'public_user_id',
            theme: 'White',
            hideideas: true,
            hide_side_toolbar: true
            /*container_id: 'technical-analysis',
        datafeed: new Datafeeds.UDFCompatibleDatafeed('https://data.tradingview.com'),
        // autosize: true,
        width: 500,
        height: 280,
        symbol: this.symbolPair,
        interval: '120',
        timezone: 'exchange',
        theme: 'White',
        style: '0',
        toolbar_bg: '#fff',
        withdateranges: false,
        hide_side_toolbar: true,
        allow_symbol_change: true,
        save_image: false,
        hideideas: true,
        studies: ['MASimple@tv-basicstudies'],
        show_popup_button: true,
        popup_width: '1000',
        popup_height: '650'*/
        });
    }
    ngOnChanges(): void {
        if (this.tradingView)
            this.tradingView.onChartReady(() => {
                this.tradingView.applyOverrides({ symbol: this.symbolPair });
            });
    }
}
