import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreSeatsComponent } from './theatre-seats.component';

describe('TheatreSeatsComponent', () => {
  let component: TheatreSeatsComponent;
  let fixture: ComponentFixture<TheatreSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreSeatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
