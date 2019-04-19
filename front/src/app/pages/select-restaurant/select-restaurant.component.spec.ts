import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRestaurantComponent } from './select-restaurant.component';

describe('SelectRestaurantComponent', () => {
  let component: SelectRestaurantComponent;
  let fixture: ComponentFixture<SelectRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
