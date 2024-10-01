//unit tests for,
//getDayOfTheWeek should return a valid day of the week, should handle error when
//daily special is not found, should update dailySpecial when a daily special is found.

import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DailySpecialsComponent } from './daily-specials.component';

describe('DailySpecialsComponent', () => {
  let component: DailySpecialsComponent;
  let fixture: ComponentFixture<DailySpecialsComponent>;
  let httpTestingController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailySpecialsComponent, HttpClientTestingModule],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(DailySpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getDayOfTheWeek should return a valid day of the week', () => {
    const day = component.getDayOfTheWeek();
    expect([
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]).toContain(day);
  });

  it('should handle error when daily special is not found', () => {
    const expectedMessage = 'No special today. Check back tomorrow!';
    const req = httpTestingController.expectOne(
      `http://localhost:3000/api/daily-specials?day=${component.dayOfTheWeek}`
    );
    req.flush('Special not found', { status: 404, statusText: 'Not Found' });

    expect(component.noSpecialMessage).toEqual(expectedMessage);
  });

  it('should update dailySpecial when a daily special is found', () => {
    const mockSpecial = {
      day: 'Monday',
      name: 'Carnitas Taco',
      description:
        'Slow-cooked pork with fresh cilantro, onions, and salsa on a corn tortilla.',
      price: 2.6,
    };
    const req = httpTestingController.expectOne(
      `http://localhost:3000/api/daily-specials?day=${component.dayOfTheWeek}`
    );
    req.flush(mockSpecial);
    expect(component.dailySpecial).toEqual(mockSpecial);
  });
});
