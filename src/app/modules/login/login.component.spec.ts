import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BuyFormComponent } from '../buy-form/buy-form.component';
import { BlockComponent } from '../../components/block/block.component';
import { ComponentsModule } from '../../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ComponentsModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                MatInputModule
            ],
            declarations: [LoginComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /*it('should create', () => {
        expect(component).toBeTruthy();
    });*/
});
