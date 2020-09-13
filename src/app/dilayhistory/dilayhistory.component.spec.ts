import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilayhistoryComponent } from './dilayhistory.component';

describe('DilayhistoryComponent', () => {
  let component: DilayhistoryComponent;
  let fixture: ComponentFixture<DilayhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilayhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilayhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
