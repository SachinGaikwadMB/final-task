import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { DataFilterService } from 'src/app/shared/services/data-filter.service';

import { SubMainPageComponent } from './sub-main-page.component';

describe('SubMainPageComponent', () => {
  let component: SubMainPageComponent;
  let fixture: ComponentFixture<SubMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMainPageComponent,FilterPipe],
      imports:[RouterTestingModule],
      providers:[DataFilterService]
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
