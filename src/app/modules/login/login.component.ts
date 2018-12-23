import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    private login: string;
    private password: string;
    private loginForm = new FormGroup({
        login: new FormControl('', Validators.required),
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
}
