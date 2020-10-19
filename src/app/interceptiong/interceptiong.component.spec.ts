import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptiongComponent } from './interceptiong.component';

describe('InterceptiongComponent', () => {
  let component: InterceptiongComponent;
  let fixture: ComponentFixture<InterceptiongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptiongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptiongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
