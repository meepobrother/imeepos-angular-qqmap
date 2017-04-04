import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqSphericalComponent } from './qq-spherical.component';

describe('QqSphericalComponent', () => {
  let component: QqSphericalComponent;
  let fixture: ComponentFixture<QqSphericalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqSphericalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqSphericalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
