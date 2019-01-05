import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyComponent } from './key.component';
import { BuyFormComponent } from '../buy-form/buy-form.component';
import { BlockComponent } from '../../components/block/block.component';
import { ComponentsModule } from '../../components/components.module';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('KeyComponent', () => {
    let component: KeyComponent;
    let fixture: ComponentFixture<KeyComponent>;
    let store: Store<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ComponentsModule,
                StoreModule.forRoot(reducers),
                BrowserAnimationsModule
            ],
            declarations: [KeyComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(KeyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
