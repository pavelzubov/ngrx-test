import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerArrComponent } from './tracker-arr.component';

describe('SymbolMiniTickerComponent', () => {
    let component: TrackerArrComponent;
    let fixture: ComponentFixture<TrackerArrComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TrackerArrComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TrackerArrComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
