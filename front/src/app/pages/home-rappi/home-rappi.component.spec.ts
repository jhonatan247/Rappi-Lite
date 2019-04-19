import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRappiComponent } from './home-rappi.component';

describe('HomeRappiComponent', () => {
  let component: HomeRappiComponent;
  let fixture: ComponentFixture<HomeRappiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRappiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRappiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
