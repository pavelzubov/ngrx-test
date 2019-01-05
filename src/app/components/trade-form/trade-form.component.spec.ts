import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeFormComponent } from './trade-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from '../button/button.component';

describe('TradeFormComponent', () => {
    let component: TradeFormComponent;
    let fixture: ComponentFixture<TradeFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                MatButtonModule,
                MatInputModule,
                BrowserAnimationsModule
            ],
            declarations: [TradeFormComponent, ButtonComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TradeFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
