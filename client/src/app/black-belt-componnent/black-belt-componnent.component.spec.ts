import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBeltComponnentComponent } from './black-belt-componnent.component';

describe('BlackBeltComponnentComponent', () => {
  let component: BlackBeltComponnentComponent;
  let fixture: ComponentFixture<BlackBeltComponnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackBeltComponnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackBeltComponnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
