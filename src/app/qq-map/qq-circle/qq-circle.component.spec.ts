import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqCircleComponent } from './qq-circle.component';

describe('QqCircleComponent', () => {
  let component: QqCircleComponent;
  let fixture: ComponentFixture<QqCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
