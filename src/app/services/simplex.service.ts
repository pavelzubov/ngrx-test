import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SimplexService {
    private url = 'https://www.binance.com/api/v1/';
    // private url = 'https://www.binance.com/api/v1/';
    constructor(private http: HttpClient) {}
    public getTrades(symbol): Observable<any[]> {
        const httpOptions = {
            params: new HttpParams({ fromObject: { symbol: symbol.toUpperCase(), limit: '20' } })
        };
        return this.http.get('/api/v1/trades', httpOptions).pipe(map(res => <any[]>res));
    }

    public getTickers(): Observable<any[]> {
        return this.http.get('/api/v1/ticker/24hr').pipe(map(res => <any[]>res));
    }
}