import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {
    AbstractControl,
    AsyncValidatorFn,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    private login: string;
    private password: string;
    private loginForm = new FormGroup({
        login: new FormControl('', Validators.required, this.validateName()),
        password: new FormControl('', Validators.required)
    });
    constructor(public loginService: LoginService) {}

    ngOnInit() {}

    public onSubmit() {
        console.log(this.loginForm.value);
        this.loginService
            .login(this.login, this.password)
            .subscribe(res => console.log(res));
    }
    validateName(): AsyncValidatorFn {
        /** Эмуляция запроса на сервер */
        return (control: AbstractControl): Observable<any> =>
            new Observable<any>(observer => {
                const user = '123' === control.value;
                /** если пользователь есть в массиве, то возвращаем ошибку */
                if (user) {
                    // console.log('Пользователь с таким именем уже существует');
                    observer.next({
                        nameError: 'Пользователь с таким именем уже существует'
                    });
                    observer.complete();
                }

                /** Если пользователя нет, то валидация успешна */
                observer.next(null);
                observer.complete();
            }).pipe(delay(1000));
    }
}
