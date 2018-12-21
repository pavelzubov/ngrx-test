import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    authorization: string;

    constructor(private http: HttpClient) {}

    public isAuth = (): boolean => !!this.authorization;

    mockHttp = (url: string, httpOptions: any): Observable<any> => of(['key']);

    public login(login: string, password: string): Observable<boolean> {
        const httpOptions = {
            params: new HttpParams({
                fromObject: { login, password }
            })
        };
        return this.mockHttp('', httpOptions).pipe(
            map((res: string) => {
                this.authorization = res;
                return !!res;
            })
        );
    }
}
