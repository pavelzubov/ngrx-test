import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockComponent } from './block.component';
import { BlockLoaderComponent } from './block-loader/block-loader.component';

describe('SocketComponent', () => {
    let component: BlockComponent;
    let fixture: ComponentFixture<BlockComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BlockComponent, BlockLoaderComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
