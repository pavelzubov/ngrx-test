import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellFormComponent } from './sell-form.component';
import { BuyFormComponent } from '../buy-form/buy-form.component';
import { BlockComponent } from '../../components/block/block.component';
import { ComponentsModule } from '../../components/components.module';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { reducers } from '../../store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SellFormComponent', () => {
    let component: SellFormComponent;
    let fixture: ComponentFixture<SellFormComponent>;
    let store: Store<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ComponentsModule,
                StoreModule.forRoot(reducers),
                BrowserAnimationsModule
            ],
            declarations: [SellFormComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(SellFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
