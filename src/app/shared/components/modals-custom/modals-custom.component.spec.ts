import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsCustomComponent } from './modals-custom.component';

describe('ModalsCustomComponent', () => {
  let component: ModalsCustomComponent;
  let fixture: ComponentFixture<ModalsCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
