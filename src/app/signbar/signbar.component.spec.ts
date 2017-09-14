import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignbarComponent } from './signbar.component';

describe('SignbarComponent', () => {
  let component: SignbarComponent;
  let fixture: ComponentFixture<SignbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
