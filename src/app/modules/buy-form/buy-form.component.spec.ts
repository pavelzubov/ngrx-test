import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFormComponent } from './buy-form.component';
import { BlockComponent } from '../../components/block/block.component';
import { ComponentsModule } from '../../components/components.module';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { reducers } from '../../store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BuyFormComponent', () => {
    let component: BuyFormComponent;
    let fixture: ComponentFixture<BuyFormComponent>;
    let store: Store<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ComponentsModule,
                StoreModule.forRoot(reducers),
                BrowserAnimationsModule
            ],
            declarations: [BuyFormComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(BuyFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
