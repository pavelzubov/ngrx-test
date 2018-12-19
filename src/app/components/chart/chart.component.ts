import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

declare const TradingView: any;

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit, OnChanges {
    @Input() symbolPair;
    tradingView: any;

    constructor() {}

    ngOnInit() {}
    /*ngOnChanges(): void {
        console.log(this.symbolPair);
    }*/

    ngOnChanges() {
        this.tradingView = new TradingView.widget({
            container_id: 'technical-analysis',
            // autosize: true,
            width: 500,
            height: 280,
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
