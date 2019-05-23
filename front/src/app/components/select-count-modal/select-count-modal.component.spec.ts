import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCountModalComponent } from './select-count-modal.component';

describe('SelectCountModalComponent', () => {
  let component: SelectCountModalComponent;
  let fixture: ComponentFixture<SelectCountModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCountModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
