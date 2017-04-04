import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqGencoderComponent } from './qq-gencoder.component';

describe('QqGencoderComponent', () => {
  let component: QqGencoderComponent;
  let fixture: ComponentFixture<QqGencoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqGencoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqGencoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
