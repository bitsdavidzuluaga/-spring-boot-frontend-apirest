import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsCustomComponent } from './alerts-custom.component';

describe('AlertsCustomComponent', () => {
  let component: AlertsCustomComponent;
  let fixture: ComponentFixture<AlertsCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
