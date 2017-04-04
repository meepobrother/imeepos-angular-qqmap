import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqLocationComponent } from './qq-location.component';

describe('QqLocationComponent', () => {
  let component: QqLocationComponent;
  let fixture: ComponentFixture<QqLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
