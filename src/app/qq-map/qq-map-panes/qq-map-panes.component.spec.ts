import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqMapPanesComponent } from './qq-map-panes.component';

describe('QqMapPanesComponent', () => {
  let component: QqMapPanesComponent;
  let fixture: ComponentFixture<QqMapPanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqMapPanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqMapPanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
