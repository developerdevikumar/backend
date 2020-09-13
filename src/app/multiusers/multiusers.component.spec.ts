import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiusersComponent } from './multiusers.component';

describe('MultiusersComponent', () => {
  let component: MultiusersComponent;
  let fixture: ComponentFixture<MultiusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
