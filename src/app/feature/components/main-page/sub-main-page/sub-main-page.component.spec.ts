import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMainPageComponent } from './sub-main-page.component';

describe('SubMainPageComponent', () => {
  let component: SubMainPageComponent;
  let fixture: ComponentFixture<SubMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
