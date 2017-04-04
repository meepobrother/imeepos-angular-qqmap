import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqAutocompleteComponent } from './qq-autocomplete.component';

describe('QqAutocompleteComponent', () => {
  let component: QqAutocompleteComponent;
  let fixture: ComponentFixture<QqAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
