import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqSearchComponent } from './qq-search.component';

describe('QqSearchComponent', () => {
  let component: QqSearchComponent;
  let fixture: ComponentFixture<QqSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
