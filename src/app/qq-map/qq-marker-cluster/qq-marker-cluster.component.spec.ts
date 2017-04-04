import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqMarkerClusterComponent } from './qq-marker-cluster.component';

describe('QqMarkerClusterComponent', () => {
  let component: QqMarkerClusterComponent;
  let fixture: ComponentFixture<QqMarkerClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqMarkerClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqMarkerClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
