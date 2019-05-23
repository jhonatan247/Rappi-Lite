import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAddressComponent } from './insert-address.component';

describe('InsertAddressComponent', () => {
  let component: InsertAddressComponent;
  let fixture: ComponentFixture<InsertAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
