import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqControlComponent } from './qq-control.component';

describe('QqControlComponent', () => {
  let component: QqControlComponent;
  let fixture: ComponentFixture<QqControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
