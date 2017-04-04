import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqMapComponent } from './qq-map.component';

describe('QqMapComponent', () => {
  let component: QqMapComponent;
  let fixture: ComponentFixture<QqMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
