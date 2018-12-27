import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FormattingService {
    constructor() {}

    private reverseString = value =>
        String(value)
            .split('')
            .reverse()
            .join('');

    private addOne = item =>
        item[1] ? [item[0], +item[1] === 0 ? item[1].slice(0, -1) + '1' : item[1]] : item;

    private cleanNulls = item =>
        item[1] ? [item[0], this.reverseString(+this.reverseString(item[1]))] : item;

    private sliceFraction = decimalScale => item => {
        if (decimalScale === 0) return [item[0]];
        if (decimalScale > 0) return [item[0], item[1].slice(0, decimalScale)];
        if (item[0] < 10) return [item[0], item[1].slice(0, 8)];
        if (item[0] < 100) return [item[0], item[1].slice(0, 6)];
        if (item[0] < 1000) return [item[0], item[1].slice(0, 4)];
        if (item[0] >= 1000) return [item[0], item[1].slice(0, 2)];
        return item;
    };

    private checkEmptyFraction = item => (item[1] ? item.join('.') : item[0]);

    public formatValue = (value, decimalScale, abs?): string => {
        value = typeof value !== 'number' ? +value : value;
        value = abs ? Math.abs(value) : value;
        if (value === undefined || isNaN(value) || value.toFixed(0) == value)
            return value;

        return [...[value.toFixed(10).split('.')]]
            .map(this.sliceFraction(decimalScale))
            .map(this.addOne)
            .map(this.cleanNulls)
            .map(this.checkEmptyFraction)
            .join();
    };

    private formatPercent = value => {
        if (value < 0.1 && value > -0.1) return 0;
        return this.formatValue(value, value > 1 || value < -1 ? 0 : 1);
    };
}
