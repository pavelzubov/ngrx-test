import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    private login: string;
    private password: string;
    constructor(public loginService: LoginService) {}

    ngOnInit() {}
    public loginHandle() {
        this.loginService
            .login(this.login, this.password)
            .subscribe(res => console.log(res));
    }
}
