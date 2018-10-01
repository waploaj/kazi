import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareesComponent } from './carees.component';

describe('CareesComponent', () => {
  let component: CareesComponent;
  let fixture: ComponentFixture<CareesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
