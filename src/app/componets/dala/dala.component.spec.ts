import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalaComponent } from './dala.component';

describe('DalaComponent', () => {
  let component: DalaComponent;
  let fixture: ComponentFixture<DalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
