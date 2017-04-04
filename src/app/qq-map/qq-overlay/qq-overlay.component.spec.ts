import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqOverlayComponent } from './qq-overlay.component';

describe('QqOverlayComponent', () => {
  let component: QqOverlayComponent;
  let fixture: ComponentFixture<QqOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
