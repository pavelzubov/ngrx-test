import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFormComponent } from './key-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { ButtonComponent } from '../button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('KeyFormComponent', () => {
    let component: KeyFormComponent;
    let fixture: ComponentFixture<KeyFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                MatButtonModule,
                MatInputModule,
                BrowserAnimationsModule
            ],
            declarations: [KeyFormComponent, ButtonComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KeyFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
