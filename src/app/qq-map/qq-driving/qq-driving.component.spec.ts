import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqDrivingComponent } from './qq-driving.component';

describe('QqDrivingComponent', () => {
  let component: QqDrivingComponent;
  let fixture: ComponentFixture<QqDrivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqDrivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqDrivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
