import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolSwitchComponent } from './symbol-switch.component';
import { SwitcherComponent } from '../../components/switcher/switcher.component';
import { ComponentsModule } from '../../components/components.module';

describe('SymbolSwitchComponent', () => {
    let component: SymbolSwitchComponent;
    let fixture: ComponentFixture<SymbolSwitchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ComponentsModule],
            declarations: [SymbolSwitchComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SymbolSwitchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /*it('should create', () => {
        expect(component).toBeTruthy();
    });*/
});
