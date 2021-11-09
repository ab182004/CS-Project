import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputItemsComponent } from './input-items.component';

describe('InputItemsComponent', () => {
  let component: InputItemsComponent;
  let fixture: ComponentFixture<InputItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
