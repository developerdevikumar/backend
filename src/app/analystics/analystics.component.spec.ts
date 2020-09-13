import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysticsComponent } from './analystics.component';

describe('AnalysticsComponent', () => {
  let component: AnalysticsComponent;
  let fixture: ComponentFixture<AnalysticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
