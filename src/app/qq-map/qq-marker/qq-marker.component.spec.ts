import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqMarkerComponent } from './qq-marker.component';

describe('QqMarkerComponent', () => {
  let component: QqMarkerComponent;
  let fixture: ComponentFixture<QqMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
