import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchEmAllComponent } from './catch-em-all.component';

describe('CatchEmAllComponent', () => {
  let component: CatchEmAllComponent;
  let fixture: ComponentFixture<CatchEmAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchEmAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchEmAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
