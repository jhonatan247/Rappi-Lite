import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRappiComponent } from './register-rappi.component';

describe('RegisterRappiComponent', () => {
  let component: RegisterRappiComponent;
  let fixture: ComponentFixture<RegisterRappiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterRappiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRappiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
