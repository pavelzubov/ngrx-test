import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ComponentsModule } from '../../components/components.module';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class LoginModule {}
