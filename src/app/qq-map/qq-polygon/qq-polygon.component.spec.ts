import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqPolygonComponent } from './qq-polygon.component';

describe('QqPolygonComponent', () => {
  let component: QqPolygonComponent;
  let fixture: ComponentFixture<QqPolygonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqPolygonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqPolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
