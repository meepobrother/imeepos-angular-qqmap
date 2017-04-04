import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqInfoComponent } from './qq-info.component';

describe('QqInfoComponent', () => {
  let component: QqInfoComponent;
  let fixture: ComponentFixture<QqInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
