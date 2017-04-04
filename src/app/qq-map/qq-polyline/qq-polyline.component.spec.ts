import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqPolylineComponent } from './qq-polyline.component';

describe('QqPolylineComponent', () => {
  let component: QqPolylineComponent;
  let fixture: ComponentFixture<QqPolylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqPolylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqPolylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
