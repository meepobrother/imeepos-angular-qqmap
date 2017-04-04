import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqGroundOverlayComponent } from './qq-ground-overlay.component';

describe('QqGroundOverlayComponent', () => {
  let component: QqGroundOverlayComponent;
  let fixture: ComponentFixture<QqGroundOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqGroundOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqGroundOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
